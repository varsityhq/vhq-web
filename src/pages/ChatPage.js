import React, { Component } from "react";
import { BsInboxFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import ChatSelector from "../components/ChatRoom/ChatSelector";

export default class ChatPage extends Component {
  render() {
    return (
      <section>
        <div className="v-header-section pt-4 pb-4">
          <div className="text-center">
            <h1 className="bold v-vhq-name mb-0">Chatroom</h1>
          </div>
          <div className="px-2 mb-2 mt-2 d-flex justify-content-center">
            <button className="btn d-flex text-dark align-items-center px-4 mr-1 btn-v5 bg-light bold badge-pill">
              <BsInboxFill className="text-dark mr-1" /> All (2)
            </button>
            <button className="btn d-flex align-items-center px-4 ml-1 btn-v5 bold badge-pill">
              Requests (4)
            </button>
          </div>
        </div>
        <div className="v-content-section pt-3">
          <div className="px-2">
            <form className="v-chat-search">
              <FiSearch />
              <input placeholder="Search chats..." type="text" />
            </form>
          </div>
          <div>
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
            <ChatSelector />
          </div>
        </div>
      </section>
    );
  }
}
