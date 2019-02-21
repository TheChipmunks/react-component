import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class TestComponent extends Component {
  static propTypes = {
    segment_number: PropTypes.number,
    segment_age_group: PropTypes.string,
    segment_population: PropTypes.number,
    total_population: PropTypes.number,
    income_groups: PropTypes.object
  };

  parsePrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  getProgressWidth = group_population => {
    const part = this.props.segment_population / 100;
    return group_population / part;
  };

  renderIncomeGroup = ([key, income_group]) => (
    <li key={key}>
      <h5 className={"label"}>est. income > ${key}k/yr</h5>

      <p>Est. Population</p>

      <div className={"test-component-progress"}>
        <div
          className={"progress-line"}
          data-value={this.parsePrice(this.props.segment_population)}
        >
          <div
            style={{
              width: `${this.getProgressWidth(income_group.group_population)}%`
            }}
            className={"active-progress"}
            data-value={this.parsePrice(income_group.group_population)}
          />
        </div>
      </div>

      <div className={"test-component-list-content bottom-border"}>
        <div className={"column right-offset"}>
          <div className={"row bottom-border mb"}>
            <p>Home owners:</p>
            <p>{this.parsePrice(income_group.home_owner_population)}</p>
          </div>
          <div className={"row"}>
            <p>Family:</p>
            <p>{this.parsePrice(income_group.family_home_owner_population)}</p>
          </div>
          <div className={"row"}>
            <p>Non Family</p>
            <p>
              {this.parsePrice(income_group.nonfamily_home_owner_population)}
            </p>
          </div>
        </div>

        <div className={"column"}>
          <div className={"row bottom-border mb"}>
            <p>Renters</p>
            <p>{this.parsePrice(income_group.renter_population)}</p>
          </div>
          <div className={"row"}>
            <p>Family:</p>
            <p>{this.parsePrice(income_group.family_renter_population)}</p>
          </div>
          <div className={"row"}>
            <p>Non Family</p>
            <p className={"color-white"}>
              {this.parsePrice(income_group.nonfamily_renter_population)}
            </p>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <p>Est. Market Size:</p>
        <p className={"price"}>
          {this.parsePrice(income_group.market_size)}
        </p>{" "}
      </div>
    </li>
  );

  render() {
    const {
      segment_number,
      segment_age_group,
      segment_population,
      total_population,
      income_groups
    } = this.props;
    return (
      <div className={"wrapper"}>
        <header className={"test-component-header"}>
          <h2 className={"title"}>
            Segment {segment_number} | Ages {segment_age_group}
          </h2>
          <h3 className={"subtitle"}>
            Est. Segment Population: {this.parsePrice(segment_population)} /{" "}
            <span className={"text-primary"}>
              {this.parsePrice(total_population)}
            </span>
          </h3>
        </header>
        <ul className={"test-component-list"}>
          {Object.entries(income_groups).map(this.renderIncomeGroup)}
        </ul>
      </div>
    );
  }
}
