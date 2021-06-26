import React from "react";
import JSONPretty from "react-json-pretty";
// import { BeatLoader } from "react-spinners";
import If from "./if";
import Else from "./else";
import When from "./when";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <If condition={this.props.results.flag}>
          <p>
            {this.props.results.Response ? (
              <JSONPretty
                id="json-pretty"
                data={this.props.results}
              ></JSONPretty>
            ) : null}
          </p>
        </If>
        <Else condition={this.props.results.flag}>
          {/* <BeatLoader/> */}
          <div align="center">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={300} //3 secs
            />
          </div>
        </Else>
        <When condition={this.props.results.Response}>
          <p>
            {this.props.results.Response ? (
              <JSONPretty
                id="json-pretty"
                data={this.props.results}
              ></JSONPretty>
            ) : null}
          </p>
        </When>
      </React.Fragment>
    );
  }
}

export default Results;
