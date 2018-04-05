import React from 'react';
import ReactModal from 'react-modal';
import WebAudioFontPlayer from 'webaudiofont';

const STYLE = {
  MIDISoundsInfo: {
    height: '100%',
    overflow: 'auto',
    paddingRight: '3px',
    textAlign: 'center'
  },
  MIDISoundsClose: {
    textAlign: 'center',
    borderTop: '1px solid silver'
  },
  MIDISoundsClose2: {
    textAlign: 'right',
    borderBottom: '1px solid silver'
  },
  MIDISoundsEq2: {
    writingMode: 'bt-lr' /* IE */
    , WebkitAppearance: 'slider-vertical' /* WebKit */
    , width: '0.5cm',
    height: '4cm',
    padding: '0 5px',
    WebkitTransform: [{ rotate: '270deg' }],
    MozTransform: [{ rotate: '270deg' }],
    transform: [{ rotate: '270deg' }]
  },
  MIDISoundsEq: {},
  MIDISoundsVl: {},
  centerTable: {
    margin: '0px auto'
  },
  tdOn: {
    backgroundColor: 'rgb(111,145,124)',
    width: '0.5cm',
    height: '0.5cm'
  },
  tdOff: {
    backgroundColor: 'rgb(224,224,224)',
    width: '0.5cm',
    height: '0.5cm'
  },
  eqOn: {
    backgroundColor: 'rgb(111,145,124)',
    width: '0.5cm',
    height: '0.2cm',
    fontSize: '30%',
    color: '#ffffff'
  },
  eqOff: {
    backgroundColor: 'rgb(224,224,224)',
    width: '0.5cm',
    height: '0.2cm'
  }
};
class MIDISounds extends React.Component {
  constructor(props) {
    super(props);
    console.log('MIDISounds v1.2.48');
    this.state = {
      showModal: false,
      appElementName: this.props.appElementName,
      instruments: this.props.instruments,
      drums: this.props.drums,
      master: 1.0,
      echo: 0.5,
      q32: 0,
      q64: 0,
      q128: 0,
      q256: 0,
      q512: 0,
      q1k: 0,
      q2k: 0,
      q4k: 0,
      q8k: 0,
      q16k: 0
    };
    if (this.props.appElementName) {
      ReactModal.setAppElement('#' + this.props.appElementName);
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.midiStatus = "?";
    this.initAudio();
  }
  render() {
    this.refreshCache();
    var r = React.createElement(
      'div',
      { className: 'MIDISounds' },
      React.createElement(
        'div',
        { onClick: this.handleOpenModal },
        React.createElement(
          'svg',
          { version: '1.2', width: '20mm', height: '20mm', viewBox: '0 0 1800 1000', preserveAspectRatio: 'xMidYMid' },
          React.createElement(
            'g',
            null,
            React.createElement(
              'g',
              null,
              React.createElement(
                'g',
                null,
                React.createElement(
                  'g',
                  null,
                  React.createElement(
                    'g',
                    null,
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 924,0 L 750,0 750,630 924,630 924,0 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 1794,0 L 1620,0 1620,630 1794,630 1794,0 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 1160,479 L 1386,479 1386,151 987,151 987,0 1496,0 C 1528,0 1557,26 1557,60 L 1557,570 C 1557,604 1528,630 1496,630 L 987,630 987,240 1160,240 1160,479 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 624,0 L 513,0 0,0 0,630 171,630 171,151 258,151 258,630 427,630 427,151 513,151 513,630 686,630 686,60 C 686,26 660,0 624,0 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 256,842 L 148,842 148,809 C 148,793 147,783 144,779 141,775 137,773 130,773 123,773 118,776 114,781 111,787 109,796 109,807 109,822 111,833 115,841 119,848 130,858 148,868 200,899 232,924 246,944 259,964 266,995 266,1039 266,1071 262,1094 255,1110 247,1125 233,1137 212,1148 190,1158 165,1163 137,1163 106,1163 79,1157 57,1145 35,1133 21,1118 14,1100 7,1082 4,1056 4,1023 L 4,993 112,993 112,1048 C 112,1064 113,1075 116,1080 119,1085 125,1087 132,1087 140,1087 146,1084 150,1078 153,1072 155,1063 155,1051 155,1025 152,1007 145,999 137,991 119,978 90,959 61,940 42,926 33,917 23,908 15,896 9,881 3,866 0,846 0,823 0,788 4,763 13,748 22,732 36,719 56,711 75,702 99,697 126,697 157,697 182,702 204,712 225,721 239,734 246,749 253,763 256,788 256,824 L 256,842 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 567,968 C 567,1013 566,1045 564,1064 562,1082 555,1099 544,1115 533,1130 518,1142 499,1150 480,1159 458,1163 433,1163 409,1163 387,1159 368,1151 349,1143 334,1132 322,1116 310,1100 304,1083 301,1065 299,1046 298,1014 298,968 L 298,892 C 298,847 299,815 301,796 303,778 310,761 321,745 332,730 347,718 366,709 385,701 407,697 433,697 457,697 478,701 497,709 516,717 532,728 543,744 555,760 562,777 564,795 566,813 567,846 567,892 L 567,968 Z M 451,821 C 451,800 450,787 447,781 445,776 440,773 433,773 427,773 422,775 419,780 416,784 414,798 414,821 L 414,1030 C 414,1056 415,1072 417,1078 420,1084 425,1087 432,1087 440,1087 445,1084 448,1077 450,1070 451,1053 451,1027 L 451,821 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 875,707 L 875,1006 C 875,1040 874,1063 872,1077 870,1091 863,1105 852,1120 841,1134 827,1145 809,1152 792,1160 771,1163 746,1163 720,1163 696,1159 676,1150 655,1141 640,1130 630,1116 620,1101 614,1087 612,1071 610,1055 609,1022 609,972 L 609,707 725,707 725,1042 C 725,1062 726,1074 728,1080 731,1085 735,1088 741,1088 749,1088 754,1085 756,1079 758,1073 759,1059 759,1036 L 759,707 875,707 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 1179,707 L 1179,1154 1077,1154 1016,951 1016,1154 919,1154 919,707 1016,707 1082,908 1082,707 1179,707 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 1224,707 L 1311,707 C 1367,707 1405,710 1425,715 1445,720 1460,728 1470,740 1481,752 1487,765 1490,780 1492,794 1494,822 1494,865 L 1494,1021 C 1494,1061 1492,1088 1488,1102 1484,1115 1478,1126 1468,1134 1459,1141 1447,1147 1433,1150 1420,1153 1399,1154 1371,1154 L 1224,1154 1224,707 Z M 1340,783 L 1340,1078 C 1357,1078 1368,1074 1371,1068 1375,1061 1377,1043 1377,1013 L 1377,839 C 1377,819 1377,806 1375,800 1374,794 1371,790 1366,788 1362,785 1353,783 1340,783 Z' })
                      )
                    ),
                    React.createElement(
                      'g',
                      null,
                      React.createElement(
                        'g',
                        null,
                        React.createElement('path', { fill: 'rgb(111,145,124)', stroke: 'none', d: 'M 1782,842 L 1674,842 1674,809 C 1674,793 1673,783 1670,779 1667,775 1663,773 1656,773 1649,773 1644,776 1640,781 1637,787 1635,796 1635,807 1635,822 1637,833 1641,841 1645,848 1656,858 1674,868 1726,899 1758,924 1772,944 1785,964 1792,995 1792,1039 1792,1071 1788,1094 1781,1110 1773,1125 1759,1137 1738,1148 1716,1158 1691,1163 1663,1163 1632,1163 1605,1157 1583,1145 1561,1133 1547,1118 1540,1100 1533,1082 1530,1056 1530,1023 L 1530,993 1638,993 1638,1048 C 1638,1064 1639,1075 1642,1080 1645,1085 1651,1087 1658,1087 1666,1087 1672,1084 1676,1078 1679,1072 1681,1063 1681,1051 1681,1025 1678,1007 1671,999 1663,991 1645,978 1616,959 1587,940 1568,926 1559,917 1549,908 1541,896 1535,881 1529,866 1526,846 1526,823 1526,788 1530,763 1539,748 1548,732 1562,719 1582,711 1601,702 1625,697 1652,697 1683,697 1708,702 1730,712 1751,721 1765,734 1772,749 1779,763 1782,788 1782,824 L 1782,842 Z' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        ReactModal,
        { isOpen: this.state.showModal, contentLabel: 'MIDISounds options', shouldCloseOnOverlayClick: true, onRequestClose: this.handleCloseModal },
        React.createElement(
          'div',
          { style: STYLE.MIDISoundsInfo },
          React.createElement(
            'p',
            null,
            'Master volume ',
            Math.round(this.state.master * 100),
            '%'
          ),
          React.createElement(
            'table',
            { style: STYLE.centerTable },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: STYLE.tdOn, onClick: e => this.setMasterVolume(0 / 9) }),
                React.createElement('td', { style: this.state.master < 1 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(1 / 9) }),
                React.createElement('td', { style: this.state.master < 2 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(2 / 9) }),
                React.createElement('td', { style: this.state.master < 3 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(3 / 9) }),
                React.createElement('td', { style: this.state.master < 4 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(4 / 9) }),
                React.createElement('td', { style: this.state.master < 5 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(5 / 9) }),
                React.createElement('td', { style: this.state.master < 6 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(6 / 9) }),
                React.createElement('td', { style: this.state.master < 7 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(7 / 9) }),
                React.createElement('td', { style: this.state.master < 8 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(8 / 9) }),
                React.createElement('td', { style: this.state.master < 9 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setMasterVolume(9 / 9) })
              )
            )
          ),
          React.createElement(
            'p',
            null,
            'Echo level ',
            Math.round(this.state.echo * 100),
            '%'
          ),
          React.createElement(
            'table',
            { style: STYLE.centerTable },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: STYLE.tdOn, onClick: e => this.setEchoLevel(0 / 9) }),
                React.createElement('td', { style: this.state.echo < 1 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(1 / 9) }),
                React.createElement('td', { style: this.state.echo < 2 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(2 / 9) }),
                React.createElement('td', { style: this.state.echo < 3 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(3 / 9) }),
                React.createElement('td', { style: this.state.echo < 4 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(4 / 9) }),
                React.createElement('td', { style: this.state.echo < 5 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(5 / 9) }),
                React.createElement('td', { style: this.state.echo < 6 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(6 / 9) }),
                React.createElement('td', { style: this.state.echo < 7 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(7 / 9) }),
                React.createElement('td', { style: this.state.echo < 8 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(8 / 9) }),
                React.createElement('td', { style: this.state.echo < 9 / 9 ? STYLE.tdOff : STYLE.tdOn, onClick: e => this.setEchoLevel(9 / 9) })
              )
            )
          ),
          React.createElement(
            'p',
            null,
            'Equalizer'
          ),
          React.createElement(
            'table',
            { style: STYLE.centerTable },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(10) }),
                React.createElement('td', { style: this.state.q64 > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(10) }),
                React.createElement('td', { style: this.state.q128 > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(10) }),
                React.createElement('td', { style: this.state.q256 > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(10) }),
                React.createElement('td', { style: this.state.q512 > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(10) }),
                React.createElement('td', { style: this.state.q1k > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(10) }),
                React.createElement('td', { style: this.state.q2k > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(10) }),
                React.createElement('td', { style: this.state.q4k > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(10) }),
                React.createElement('td', { style: this.state.q8k > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(10) }),
                React.createElement('td', { style: this.state.q16k > 9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(10) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(9) }),
                React.createElement('td', { style: this.state.q64 > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(9) }),
                React.createElement('td', { style: this.state.q128 > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(9) }),
                React.createElement('td', { style: this.state.q256 > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(9) }),
                React.createElement('td', { style: this.state.q512 > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(9) }),
                React.createElement('td', { style: this.state.q1k > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(9) }),
                React.createElement('td', { style: this.state.q2k > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(9) }),
                React.createElement('td', { style: this.state.q4k > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(9) }),
                React.createElement('td', { style: this.state.q8k > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(9) }),
                React.createElement('td', { style: this.state.q16k > 8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(9) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(8) }),
                React.createElement('td', { style: this.state.q64 > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(8) }),
                React.createElement('td', { style: this.state.q128 > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(8) }),
                React.createElement('td', { style: this.state.q256 > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(8) }),
                React.createElement('td', { style: this.state.q512 > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(8) }),
                React.createElement('td', { style: this.state.q1k > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(8) }),
                React.createElement('td', { style: this.state.q2k > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(8) }),
                React.createElement('td', { style: this.state.q4k > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(8) }),
                React.createElement('td', { style: this.state.q8k > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(8) }),
                React.createElement('td', { style: this.state.q16k > 7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(8) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(7) }),
                React.createElement('td', { style: this.state.q64 > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(7) }),
                React.createElement('td', { style: this.state.q128 > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(7) }),
                React.createElement('td', { style: this.state.q256 > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(7) }),
                React.createElement('td', { style: this.state.q512 > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(7) }),
                React.createElement('td', { style: this.state.q1k > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(7) }),
                React.createElement('td', { style: this.state.q2k > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(7) }),
                React.createElement('td', { style: this.state.q4k > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(7) }),
                React.createElement('td', { style: this.state.q8k > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(7) }),
                React.createElement('td', { style: this.state.q16k > 6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(7) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(6) }),
                React.createElement('td', { style: this.state.q64 > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(6) }),
                React.createElement('td', { style: this.state.q128 > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(6) }),
                React.createElement('td', { style: this.state.q256 > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(6) }),
                React.createElement('td', { style: this.state.q512 > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(6) }),
                React.createElement('td', { style: this.state.q1k > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(6) }),
                React.createElement('td', { style: this.state.q2k > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(6) }),
                React.createElement('td', { style: this.state.q4k > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(6) }),
                React.createElement('td', { style: this.state.q8k > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(6) }),
                React.createElement('td', { style: this.state.q16k > 5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(6) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(5) }),
                React.createElement('td', { style: this.state.q64 > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(5) }),
                React.createElement('td', { style: this.state.q128 > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(5) }),
                React.createElement('td', { style: this.state.q256 > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(5) }),
                React.createElement('td', { style: this.state.q512 > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(5) }),
                React.createElement('td', { style: this.state.q1k > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(5) }),
                React.createElement('td', { style: this.state.q2k > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(5) }),
                React.createElement('td', { style: this.state.q4k > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(5) }),
                React.createElement('td', { style: this.state.q8k > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(5) }),
                React.createElement('td', { style: this.state.q16k > 4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(5) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(4) }),
                React.createElement('td', { style: this.state.q64 > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(4) }),
                React.createElement('td', { style: this.state.q128 > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(4) }),
                React.createElement('td', { style: this.state.q256 > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(4) }),
                React.createElement('td', { style: this.state.q512 > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(4) }),
                React.createElement('td', { style: this.state.q1k > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(4) }),
                React.createElement('td', { style: this.state.q2k > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(4) }),
                React.createElement('td', { style: this.state.q4k > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(4) }),
                React.createElement('td', { style: this.state.q8k > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(4) }),
                React.createElement('td', { style: this.state.q16k > 3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(4) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(3) }),
                React.createElement('td', { style: this.state.q64 > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(3) }),
                React.createElement('td', { style: this.state.q128 > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(3) }),
                React.createElement('td', { style: this.state.q256 > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(3) }),
                React.createElement('td', { style: this.state.q512 > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(3) }),
                React.createElement('td', { style: this.state.q1k > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(3) }),
                React.createElement('td', { style: this.state.q2k > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(3) }),
                React.createElement('td', { style: this.state.q4k > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(3) }),
                React.createElement('td', { style: this.state.q8k > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(3) }),
                React.createElement('td', { style: this.state.q16k > 2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(3) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(2) }),
                React.createElement('td', { style: this.state.q64 > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(2) }),
                React.createElement('td', { style: this.state.q128 > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(2) }),
                React.createElement('td', { style: this.state.q256 > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(2) }),
                React.createElement('td', { style: this.state.q512 > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(2) }),
                React.createElement('td', { style: this.state.q1k > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(2) }),
                React.createElement('td', { style: this.state.q2k > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(2) }),
                React.createElement('td', { style: this.state.q4k > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(2) }),
                React.createElement('td', { style: this.state.q8k > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(2) }),
                React.createElement('td', { style: this.state.q16k > 1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(2) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(1) }),
                React.createElement('td', { style: this.state.q64 > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(1) }),
                React.createElement('td', { style: this.state.q128 > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(1) }),
                React.createElement('td', { style: this.state.q256 > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(1) }),
                React.createElement('td', { style: this.state.q512 > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(1) }),
                React.createElement('td', { style: this.state.q1k > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(1) }),
                React.createElement('td', { style: this.state.q2k > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(1) }),
                React.createElement('td', { style: this.state.q4k > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(1) }),
                React.createElement('td', { style: this.state.q8k > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(1) }),
                React.createElement('td', { style: this.state.q16k > 0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(1) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand32(0) },
                  '32'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand64(0) },
                  '64'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand128(0) },
                  '128'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand256(0) },
                  '256'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand512(0) },
                  '512'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand1k(0) },
                  '1k'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand2k(0) },
                  '2k'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand4k(0) },
                  '4k'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand8k(0) },
                  '8k'
                ),
                React.createElement(
                  'td',
                  { style: STYLE.eqOn, onClick: e => this.setBand16k(0) },
                  '16k'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-1) }),
                React.createElement('td', { style: this.state.q64 < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-1) }),
                React.createElement('td', { style: this.state.q128 < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-1) }),
                React.createElement('td', { style: this.state.q256 < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-1) }),
                React.createElement('td', { style: this.state.q512 < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-1) }),
                React.createElement('td', { style: this.state.q1k < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-1) }),
                React.createElement('td', { style: this.state.q2k < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-1) }),
                React.createElement('td', { style: this.state.q4k < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-1) }),
                React.createElement('td', { style: this.state.q8k < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-1) }),
                React.createElement('td', { style: this.state.q16k < -0 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-1) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-2) }),
                React.createElement('td', { style: this.state.q64 < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-2) }),
                React.createElement('td', { style: this.state.q128 < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-2) }),
                React.createElement('td', { style: this.state.q256 < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-2) }),
                React.createElement('td', { style: this.state.q512 < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-2) }),
                React.createElement('td', { style: this.state.q1k < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-2) }),
                React.createElement('td', { style: this.state.q2k < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-2) }),
                React.createElement('td', { style: this.state.q4k < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-2) }),
                React.createElement('td', { style: this.state.q8k < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-2) }),
                React.createElement('td', { style: this.state.q16k < -1 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-2) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-3) }),
                React.createElement('td', { style: this.state.q64 < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-3) }),
                React.createElement('td', { style: this.state.q128 < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-3) }),
                React.createElement('td', { style: this.state.q256 < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-3) }),
                React.createElement('td', { style: this.state.q512 < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-3) }),
                React.createElement('td', { style: this.state.q1k < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-3) }),
                React.createElement('td', { style: this.state.q2k < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-3) }),
                React.createElement('td', { style: this.state.q4k < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-3) }),
                React.createElement('td', { style: this.state.q8k < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-3) }),
                React.createElement('td', { style: this.state.q16k < -2 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-3) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-4) }),
                React.createElement('td', { style: this.state.q64 < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-4) }),
                React.createElement('td', { style: this.state.q128 < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-4) }),
                React.createElement('td', { style: this.state.q256 < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-4) }),
                React.createElement('td', { style: this.state.q512 < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-4) }),
                React.createElement('td', { style: this.state.q1k < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-4) }),
                React.createElement('td', { style: this.state.q2k < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-4) }),
                React.createElement('td', { style: this.state.q4k < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-4) }),
                React.createElement('td', { style: this.state.q8k < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-4) }),
                React.createElement('td', { style: this.state.q16k < -3 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-4) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-5) }),
                React.createElement('td', { style: this.state.q64 < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-5) }),
                React.createElement('td', { style: this.state.q128 < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-5) }),
                React.createElement('td', { style: this.state.q256 < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-5) }),
                React.createElement('td', { style: this.state.q512 < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-5) }),
                React.createElement('td', { style: this.state.q1k < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-5) }),
                React.createElement('td', { style: this.state.q2k < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-5) }),
                React.createElement('td', { style: this.state.q4k < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-5) }),
                React.createElement('td', { style: this.state.q8k < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-5) }),
                React.createElement('td', { style: this.state.q16k < -4 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-5) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-6) }),
                React.createElement('td', { style: this.state.q64 < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-6) }),
                React.createElement('td', { style: this.state.q128 < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-6) }),
                React.createElement('td', { style: this.state.q256 < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-6) }),
                React.createElement('td', { style: this.state.q512 < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-6) }),
                React.createElement('td', { style: this.state.q1k < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-6) }),
                React.createElement('td', { style: this.state.q2k < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-6) }),
                React.createElement('td', { style: this.state.q4k < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-6) }),
                React.createElement('td', { style: this.state.q8k < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-6) }),
                React.createElement('td', { style: this.state.q16k < -5 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-6) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-7) }),
                React.createElement('td', { style: this.state.q64 < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-7) }),
                React.createElement('td', { style: this.state.q128 < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-7) }),
                React.createElement('td', { style: this.state.q256 < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-7) }),
                React.createElement('td', { style: this.state.q512 < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-7) }),
                React.createElement('td', { style: this.state.q1k < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-7) }),
                React.createElement('td', { style: this.state.q2k < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-7) }),
                React.createElement('td', { style: this.state.q4k < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-7) }),
                React.createElement('td', { style: this.state.q8k < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-7) }),
                React.createElement('td', { style: this.state.q16k < -6 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-7) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-8) }),
                React.createElement('td', { style: this.state.q64 < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-8) }),
                React.createElement('td', { style: this.state.q128 < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-8) }),
                React.createElement('td', { style: this.state.q256 < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-8) }),
                React.createElement('td', { style: this.state.q512 < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-8) }),
                React.createElement('td', { style: this.state.q1k < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-8) }),
                React.createElement('td', { style: this.state.q2k < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-8) }),
                React.createElement('td', { style: this.state.q4k < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-8) }),
                React.createElement('td', { style: this.state.q8k < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-8) }),
                React.createElement('td', { style: this.state.q16k < -7 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-8) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-9) }),
                React.createElement('td', { style: this.state.q64 < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-9) }),
                React.createElement('td', { style: this.state.q128 < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-9) }),
                React.createElement('td', { style: this.state.q256 < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-9) }),
                React.createElement('td', { style: this.state.q512 < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-9) }),
                React.createElement('td', { style: this.state.q1k < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-9) }),
                React.createElement('td', { style: this.state.q2k < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-9) }),
                React.createElement('td', { style: this.state.q4k < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-9) }),
                React.createElement('td', { style: this.state.q8k < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-9) }),
                React.createElement('td', { style: this.state.q16k < -8 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-9) })
              ),
              React.createElement(
                'tr',
                null,
                React.createElement('td', { style: this.state.q32 < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand32(-10) }),
                React.createElement('td', { style: this.state.q64 < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand64(-10) }),
                React.createElement('td', { style: this.state.q128 < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand128(-10) }),
                React.createElement('td', { style: this.state.q256 < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand256(-10) }),
                React.createElement('td', { style: this.state.q512 < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand512(-10) }),
                React.createElement('td', { style: this.state.q1k < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand1k(-10) }),
                React.createElement('td', { style: this.state.q2k < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand2k(-10) }),
                React.createElement('td', { style: this.state.q4k < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand4k(-10) }),
                React.createElement('td', { style: this.state.q8k < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand8k(-10) }),
                React.createElement('td', { style: this.state.q16k < -9 ? STYLE.eqOn : STYLE.eqOff, onClick: e => this.setBand16k(-10) })
              )
            )
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'button',
              { onClick: this.onSetPower.bind(this) },
              'Power'
            ),
            React.createElement(
              'button',
              { onClick: this.onSetDance.bind(this) },
              'Dance'
            ),
            React.createElement(
              'button',
              { onClick: this.onSetNone.bind(this) },
              'Flat'
            ),
            '\xA0\xA0\xA0',
            React.createElement(
              'button',
              { onClick: this.handleCloseModal },
              'Close'
            )
          )
        )
      )
    );
    return r;
  }
  contextTime() {
    return this.audioContext.currentTime;
  }
  onSetNone() {
    this.setBand32(0);
    this.setBand64(0);
    this.setBand128(0);
    this.setBand256(0);
    this.setBand512(0);
    this.setBand1k(0);
    this.setBand2k(0);
    this.setBand4k(0);
    this.setBand8k(0);
    this.setBand16k(0);
  }
  onSetDance() {
    this.setBand32(2);
    this.setBand64(2);
    this.setBand128(1);
    this.setBand256(-1);
    this.setBand512(5);
    this.setBand1k(4);
    this.setBand2k(4);
    this.setBand4k(2);
    this.setBand8k(-2);
    this.setBand16k(3);
  }
  onSetPower() {
    this.setBand32(2);
    this.setBand64(4);
    this.setBand128(3);
    this.setBand256(-2);
    this.setBand512(-3);
    this.setBand1k(1);
    this.setBand2k(2);
    this.setBand4k(3);
    this.setBand8k(-3);
    this.setBand16k(1);
  }
  onChangeMaster(e) {
    let n = e.target.value;
    this.setMasterVolume(n);
  }
  onChangeEcho(e) {
    let n = e.target.value;
    this.setEchoLevel(n);
  }
  onChangeQ32(e) {
    let n = e.target.value;
    this.setBand32(n);
  }
  onChangeQ64(e) {
    let n = e.target.value;
    this.setBand64(n);
  }
  onChangeQ128(e) {
    let n = e.target.value;
    this.setBand128(n);
  }
  onChangeQ256(e) {
    let n = e.target.value;
    this.setBand256(n);
  }
  onChangeQ512(e) {
    let n = e.target.value;
    this.setBand512(n);
  }
  onChangeQ1k(e) {
    let n = e.target.value;
    this.setBand1k(n);
  }
  onChangeQ2k(e) {
    let n = e.target.value;
    this.setBand2k(n);
  }
  onChangeQ4k(e) {
    let n = e.target.value;
    this.setBand4k(n);
  }
  onChangeQ8k(e) {
    let n = e.target.value;
    this.setBand8k(n);
  }
  onChangeQ16k(e) {
    let n = e.target.value;
    this.setBand16k(n);
  }
  refreshCache() {
    if (this.state.instruments) {
      for (var i = 0; i < this.state.instruments.length; i++) {
        this.cacheInstrument(this.state.instruments[i]);
      }
    }
    if (this.state.drums) {
      for (var k = 0; k < this.state.drums.length; k++) {
        this.cacheDrum(this.state.drums[k]);
      }
    }
  }
  getProperties() {
    return {
      master: this.echo.output.gain.value * 1
    };
  }
  showPropertiesDialog() {
    this.handleOpenModal();
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  initAudio() {
    console.log('initAudio M♩D♩Sounds');
    if (this.player) {
      if (this.audioContext) {
        this.player.cancelQueue(this.audioContext);
      }
    }
    var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.destination = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.output = this.audioContext.createGain();
    this.echo = this.player.createReverberator(this.audioContext);
    this.echo.wet.gain.setTargetAtTime(this.state.echo, 0, 0.0001);
    this.echo.output.connect(this.output);
    this.equalizer.output.connect(this.echo.input);
    this.output.connect(this.destination);
    this.volumesInstrument = [];
    this.volumesDrum = [];
    this.midiNotes = [];
  }
  cacheInstrument(n) {
    var info = this.player.loader.instrumentInfo(n);
    if (window[info.variable]) {
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
    });
  }
  cacheDrum(n) {
    var info = this.player.loader.drumInfo(n);
    if (window[info.variable]) {
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
    });
  }
  playDrum(when, drum) {
    var info = this.player.loader.drumInfo(drum);
    if (window[info.variable]) {
      var pitch = window[info.variable].zones[0].keyRangeLow;
      var volume = this.volumeDrumAdjust(drum);
      this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitch, 3, volume);
    } else {
      this.cacheDrum(drum);
    }
  }
  playDrumsAt(when, drums) {
    for (var i = 0; i < drums.length; i++) {
      this.playDrum(when, drums[i]);
    }
  }
  volumeInstrumentAdjust(instrument) {
    if (!(this.volumesInstrument[instrument] === undefined)) {
      return this.volumesInstrument[instrument];
    }
    return 1;
  }
  volumeDrumAdjust(drum) {
    if (!(this.volumesDrum[drum] === undefined)) {
      return this.volumesDrum[drum];
    }
    return 1;
  }
  startPlayLoop(beats, bpm, density, fromBeat) {
    this.stopPlayLoop();
    this.loopStarted = true;
    var wholeNoteDuration = 4 * 60 / bpm;
    if (fromBeat < beats.length) {
      this.beatIndex = fromBeat;
    } else {
      this.beatIndex = 0;
    }
    this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
    var nextLoopTime = this.contextTime() + density * wholeNoteDuration;
    var me = this;
    this.loopIntervalID = setInterval(function () {
      if (me.contextTime() > nextLoopTime - density * wholeNoteDuration) {
        me.beatIndex++;
        if (me.beatIndex >= beats.length) {
          me.beatIndex = 0;
        }
        me.playBeatAt(nextLoopTime, beats[me.beatIndex], bpm);
        nextLoopTime = nextLoopTime + density * wholeNoteDuration;
      }
    }, 22);
  }
  stopPlayLoop() {
    this.loopStarted = false;
    clearInterval(this.loopIntervalID);
    this.cancelQueue();
  }
  cancelQueue() {
    this.player.cancelQueue(this.audioContext);
  }
  playBeatAt(when, beat, bpm) {
    this.playDrumsAt(when, beat[0]);
    var chords = beat[1];
    var N = 4 * 60 / bpm;
    for (var i = 0; i < chords.length; i++) {
      var chord = chords[i];
      var instrument = chord[0];
      var pitches = chord[1];
      var duration = chord[2];
      var kind = 0;
      if (chord.length > 3) {
        kind = chord[3];
      }
      if (kind === 1) {
        this.playStrumDownAt(when, instrument, pitches, duration * N);
      } else {
        if (kind === 2) {
          this.playStrumUpAt(when, instrument, pitches, duration * N);
        } else {
          if (kind === 3) {
            this.playSnapAt(when, instrument, pitches, duration * N);
          } else {
            this.playChordAt(when, instrument, pitches, duration * N);
          }
        }
      }
    }
  }
  playChordAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueChord(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playStrumUpAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueStrumUp(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playStrumDownAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueStrumDown(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playSnapAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueSnap(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  midNoteOn(pitch, velocity) {
    this.midiNoteOff(pitch);
    if (this.miditone) {
      var envelope = this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.tone, 0, pitch, 123456789, velocity / 100);
      var note = {
        pitch: pitch,
        envelope: envelope
      };
      this.midiNotes.push(note);
    }
  }
  midiNoteOff(pitch) {
    for (var i = 0; i < this.midiNotes.length; i++) {
      if (this.midiNotes[i].pitch === pitch) {
        if (this.midiNotes[i].envelope) {
          this.midiNotes[i].envelope.cancel();
        }
        this.midiNotes.splice(i, 1);
        return;
      }
    }
  }
  midiOnMIDImessage(event) {
    var data = event.data;
    //var cmd = data[0] >> 4;
    //var channel = data[0] & 0xf;
    var type = data[0] & 0xf0;
    var pitch = data[1];
    var velocity = data[2];
    switch (type) {
      case 144:
        this.midNoteOn(pitch, velocity);
        //logKeys();
        break;
      case 128:
        this.midiNoteOff(pitch);
        //logKeys();
        break;
      default:
        break;
    }
  }
  midiOnStateChange(event) {
    console.log('midiOnStateChange', event);
    //msg.innerHTML = event.port.manufacturer + ' ' + event.port.name + ' ' + event.port.state;
  }
  requestMIDIAccessSuccess(midi) {
    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      console.log('midi input', input);
      input.value.onmidimessage = this.midiOnMIDImessage;
    }
    midi.onstatechange = this.midiOnStateChange;
  }
  requestMIDIAccessFailure(e) {
    console.log('requestMIDIAccessFailure', e);
  }
  startMIDIInput() {
    if (navigator.requestMIDIAccess) {
      console.log('navigator.requestMIDIAccess ok');
      navigator.requestMIDIAccess().then(this.requestMIDIAccessSuccess, this.requestMIDIAccessFailure);
    } else {
      console.log('navigator.requestMIDIAccess undefined');
      //msg.innerHTML = 'navigator.requestMIDIAccess undefined';
    }
  }
  playDrumsNow(drums) {
    this.playDrumsAt(0, drums);
  }
  playChordNow(instrument, pitches, duration) {
    this.playChordAt(0, instrument, pitches, duration);
  }
  playStrumUpNow(instrument, pitches, duration) {
    this.playStrumUpAt(0, instrument, pitches, duration);
  }
  playStrumDownNow(instrument, pitches, duration) {
    this.playStrumDownAt(0, instrument, pitches, duration);
  }
  playSnapNow(instrument, pitches, duration) {
    this.playSnapAt(0, instrument, pitches, duration);
  }
  setMasterVolume(volume) {
    this.output.gain.setTargetAtTime(volume, 0, 0.0001);
    this.setState({
      master: volume
    });
  }
  setInstrumentVolume(instrument, volume) {
    this.volumesInstrument[instrument] = volume;
  }
  setDrumVolume(drum, volume) {
    this.volumesDrum[drum] = volume;
  }
  setEchoLevel(value) {
    this.echo.wet.gain.setTargetAtTime(value, 0, 0.0001);
    this.setState({
      echo: value
    });
  }
  setBand32(level) {
    this.equalizer.band32.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q32: level
    });
  }
  setBand64(level) {
    this.equalizer.band64.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q64: level
    });
  }
  setBand128(level) {
    this.equalizer.band128.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q128: level
    });
  }
  setBand256(level) {
    this.equalizer.band256.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q256: level
    });
  }
  setBand512(level) {
    this.equalizer.band512.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q512: level
    });
  }
  setBand1k(level) {
    this.equalizer.band1k.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q1k: level
    });
  }
  setBand2k(level) {
    this.equalizer.band2k.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q2k: level
    });
  }
  setBand4k(level) {
    this.equalizer.band4k.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q4k: level
    });
  }
  setBand8k(level) {
    this.equalizer.band8k.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q8k: level
    });
  }
  setBand16k(level) {
    this.equalizer.band16k.gain.setTargetAtTime(level, 0, 0.0001);
    this.setState({
      q16k: level
    });
  }
  setKeyboardInstrument(n) {
    var info = this.player.loader.instrumentInfo(n);
    if (window[info.variable]) {
      this.miditone = window[info.variable];
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
      this.miditone = window[info.variable];
    });
  }
}

export default MIDISounds;

