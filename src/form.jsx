import React from "react";
import "./form.scss";
import axios from "axios";
import Else from "./else";

function save() {
  let saved = getData();

  if (history.length === 0 || history.length === 1) {
    for (let i in saved) {
      history.unshift(saved[i]);
    }
  }
  localStorage.setItem("history", JSON.stringify(history));
}
function getData() {
  let information = localStorage.getItem("history");
  if (information) {
    information = JSON.parse(information);
    return information;
  } else {
    return [];
  }
}

let history = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null,
      flag: false,
    };
  }
  componentDidMount() {
    console.log("here");
    let data = this.props.history;
    this.setState({ formData: data });
    
  }
  handlerForm = async (e) => {
    this.setState({ flag: !this.state.flag });
    console.log("this.state.flag", this.state.flag);
    e.preventDefault();
    history.push({
      method: e.target.method.value,
      URL: e.target.url.value,
      body: e.target.body.value,
    });
    save();
    if (e.target.method.value === "get") {
      let raw = await fetch(e.target.url.value);
      let data = await raw.json();
      this.props.handler(data.results, data.count, this.state.flag);
    } else {
      let body = e.target.body.value;
      let method = e.target.method.value;
      let results = await axios({
        method: `${method}`,
        url: `${e.target.url.value}`,
        data: JSON.parse(body),
      });
      this.props.handler(results.data, 0, this.state.flag);
    }
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <main>
          {console.log('this.state.formData', this.state.formData)}
        {/* <If condition={this.state.formData}>
          <form onSubmit={this.handlerForm}>
            <label htmlFor="url">URL:</label>
            <input type="url" id="url" value = {this.state.formData.URL} required />
            <button type="submit">GO!</button>
            <input type="radio" id="get" value="get" name="method" required />
            <label htmlFor="get">get</label>
            <input type="radio" id="post" value="post" name="method" required />
            <label htmlFor="post">post</label>
            <input type="radio" id="put" value="put" name="method" required />
            <label htmlFor="put">put</label>
            <input
              type="radio"
              id="delete"
              value="delete"
              name="method"
              required
            />
            <label htmlFor="delete">delete</label>
            <textarea name="body" id="body" cols="30" rows="10" value={this.state.formData.body}></textarea>
          </form>
        </If> */}
        <Else condition={!this.state.formData}>
          <form onSubmit={this.handlerForm}>
            <label htmlFor="url">URL:</label>
            <input type="url" id="url" required />
            <button type="submit">GO!</button>
            <input type="radio" id="get" value="get" name="method" required />
            <label htmlFor="get">get</label>
            <input type="radio" id="post" value="post" name="method" required />
            <label htmlFor="post">post</label>
            <input type="radio" id="put" value="put" name="method" required />
            <label htmlFor="put">put</label>
            <input
              type="radio"
              id="delete"
              value="delete"
              name="method"
              required
            />
            <label htmlFor="delete">delete</label>
            <textarea name="body" id="body" cols="30" rows="10"></textarea>
          </form>
        </Else>

        {/* <p>{`${this.state.Data}      ${this.state.URL}`}</p> */}
      </main>
    );
  }
}

export default Main;
