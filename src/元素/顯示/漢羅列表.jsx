import React from "react";
import PropTypes from "prop-types";
import { HanLoTsua } from "demo-ui";

class 漢羅列表 extends React.Component {

  render() {
    const { 結果腔口, 綜合標音 } = this.props;
    return (
      <div>
      {綜合標音.map((綜音, i) => (
        <HanLoTsua
          key={i}
          腔口={結果腔口}
          漢字={綜音.漢字}
          臺羅閏號調={綜音.臺灣客話}
          分詞={綜音.分詞}/>
        ))}
      </div>
    );
  }
}

漢羅列表.propTypes = {
  結果腔口: PropTypes.string.isRequired,
  綜合標音: PropTypes.arrayOf(PropTypes.shape({
    臺灣客話: PropTypes.string.isRequired,
    漢字: PropTypes.string.isRequired,
    分詞: PropTypes.string.isRequired,
  })).isRequired,
};

export default 漢羅列表;
