import React, { Component } from 'react';

import  {
  SearchInput,
  UsersList,
  ActiveUser,
  Dropdown,
  Modal,
} from '../../components';

import data from '../../data.txt';
import logo from '../../logo.svg';
import '../../App.css';
import ItemUser from '../../components/ItemUser';

import { IMAGES, COLORS } from '../../assets';

const listDropdowns = [
  {
    name: 'Button 1',
  },
  {
    name: 'Button 2',
  },
  {
    name: 'Button 3',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: null,
      currentPage: 0,
      listPages: null,
      isErrorUser: false,
      listDropdowns,
      isShowModal: false,
    };
  }

  componentWillMount() {
    fetch(data)
    .then(response => response.json())
    .then(data => {
      this.setState({
        defaultUsers: [...data],
        data,
        activeUser: data[0],
      });
    })
  }

  updateApp(config) {
    this.setState(config);
    if(config.activeUser.id === this.state.activeUser.id) {
      this.setState({
        isErrorUser: true,
      })
    } else {
      this.setState({
        isErrorUser: false,
      });
    }
  }

  search = (e) => {
    const value = e.target.value.toLowerCase();
    const fillter = this.state.defaultUsers.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    this.setState({
      data: fillter,
      currentPage: 0,
    });
  }
  
  sort = (type) => {
    const { data } = this.state;
    const dataUsers = data;
    const sorted = dataUsers.sort((a, b) => {
      return a[type] > b[type] ? 1 : -1;
    });
    this.setState({
      data: sorted,
    });
  }

  splitUsers = () => {
    const {
      data,
      currentPage,
    } = this.state;
    return data && data.slice(currentPage * 15, currentPage * 15 + 15);
  }
  
  handlePagitaion = (number) => {
    const { currentPage, data } = this.state;
    const listPages = Math.ceil(data.length / 15);
    if(number + currentPage >= 0 && number + currentPage < listPages) {
      this.setState(prev => (console.log(prev),{
        listPages,
        currentPage: prev.currentPage + number,
      }))
    }
  }

  reset = () => {
    this.props.history.push('About');
    this.updateApp({
      data: this.state.defaultUsers,
      activeUser: this.state.defaultUsers[0],
    });
  }

  isContentDropdown = (item, index) => {
    const listDropdowns = [...this.state.listDropdowns];
    if (listDropdowns[index].isOpen) {
      this.setState({
        isShowModal: true,
        modalIndex: index,
      });
    } else {
    listDropdowns[index].isOpen = true;
    this.setState({
      listDropdowns,
    });
  }
  }

  closeModal = () => {
    this.setState({
      isShowModal: false,
    });
  }

  closeDropdown = () => {
    this.state.listDropdowns[this.state.modalIndex].isOpen = false;
    this.setState({
      isShowModal: false,
    });
  }

  render() {
    console.log('listDropdowns', this.state.listDropdowns);
    const buttonsList = [
      {
        name: 'Name',
        icon: 'fa-users',
        onClick: () => this.sort('name'),
      },
      {
        name: 'Age',
        icon: 'fa-ban',
        onClick: () => this.sort('age'),
      },
      {
        name: 'Reset',
        icon: 'fa-ban',
        onClick: this.reset,
      },
    ];
    const {
      data,
      listPages,
      currentPage,
      isErrorUser,
      isShowModal,
    } = this.state;
    return (
      <div className='home'>
        <div>
          {
            listDropdowns.map((item, index) =>
            <Dropdown
              key={index}
              title={item.name}
              isOpenDropdown={item.isOpen}
              isContentDropdown={() => this.isContentDropdown(item, index)}
            />)
          }
        </div>
        {
          isShowModal &&
          <Modal 
          closeModal={this.closeModal}
          closeDropdown={this.closeDropdown}
          />
        }
        {/* <header className={`App-header ${this.state.isHeaderClass ? 'red' : ''}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="home__header">
          <SearchInput
            isError={data && data.length === 0}
            searchValue={this.search}
          />
          <div className='rowSorting'>
            {
              buttonsList.map((item, id) =>
              <button
                key={id}
                type='button'
                onClick={item.onClick}
                className='btn btn-primary'
              >
                <i className={`fa ${item.icon}`}></i>
                <p className='btnName'>
                  {item.name}
                </p>
              </button>)
            }
          </div>
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <div className='sidebar'>
              <ActiveUser
                isErrorUser={isErrorUser}
                user={this.state.activeUser}
              />
            </div>
          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList
              handlePagitaion={this.handlePagitaion}
              currentPage={currentPage}
              listPages={listPages}
              data={this.splitUsers()}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
