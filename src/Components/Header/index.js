import React from "react";
import { connect } from "react-redux";

import { putTemplateParams } from "../../actions";

const mapStateToProps = state => ({
  templateParams: state.templateParams
});

const mapDispatchToProps = dispatch => ({
  putTemplateParams: params => {
    dispatch(putTemplateParams(params.utm_campaign, params.utm_source));
  }
});

class Header extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let campaign = this.campaignRef.value;
    let source = this.sourceRef.value;

    this.props.putTemplateParams({
      utm_campaign: campaign,
      utm_source: source
    });
  }

  render() {
    return (
      <header>
        <label>UTM Campagin</label>
        <input
          type="text"
          name="utm_campaign"
          defaultValue={this.props.templateParams.utm_campaign}
          ref={r => (this.campaignRef = r)}
        />
        <label>UTM Source</label>
        <input
          type="text"
          name="utm_source"
          defaultValue={this.props.templateParams.utm_source}
          ref={r => (this.sourceRef = r)}
        />
        <button onClick={this.handleClick} className="btn__save">
          SAVE
        </button>
      </header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
