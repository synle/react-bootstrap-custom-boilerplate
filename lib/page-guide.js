'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// css code
require('./main-js');
require('./main-css');
require('./page-guide.scss'); // extra scss for the tutorial

// js code

var createReactClass = _react2.default.createClass;

// mount node
var mountNode = document.getElementById('app-container');

// examples...
var exampleDoms = [];

// function to get the dom...
var _getExampleDom = function _getExampleDom(elmTitle, elmContent, elmSnippet) {
  return _react2.default.createElement(
    _reactBootstrap.Panel,
    { header: elmTitle, footer: elmSnippet },
    elmContent
  );
};

var _pushExampleDom = function _pushExampleDom(elmTitle, elmContent, elmSnippet) {
  exampleDoms.push(_getExampleDom(elmTitle, elmContent, elmSnippet));
};

var _getExampleDomList = function _getExampleDomList() {
  // function that handle the mapping
  var counter = 0;
  return exampleDoms.map(function (curDom) {
    counter++;
    return _react2.default.createElement(
      'div',
      { key: counter },
      curDom
    );
  });
};

var __getMenuItems = function __getMenuItems() {
  return [_react2.default.createElement(
    _reactBootstrap.MenuItem,
    { eventKey: '1', key: '1' },
    'item 1'
  ), _react2.default.createElement(
    _reactBootstrap.MenuItem,
    { eventKey: '2', key: '2' },
    'item 2'
  ), _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true, key: '0' }), _react2.default.createElement(
    _reactBootstrap.MenuItem,
    { eventKey: '3', key: '3' },
    'item 3'
  )];
};

//////////////////////
//////////////////////
// example start here
//////////////////////
//////////////////////

// _pushExampleDom(
//     'Button',
//     (
//         <article>
//         </article>
//     ),
//     '<Button bsStyle="..." bsSize="..." [active|disabled]>Button Text</Button>'
// )

_pushExampleDom('Button', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'Button Sizes'
  ),
  _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement('td', { className: 'some-padding' }),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsSize'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'large'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', bsSize: 'large' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', bsSize: 'large' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', bsSize: 'large' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', bsSize: 'large' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', bsSize: 'large' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', bsSize: 'large' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsSize'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'DEFAULT'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsSize'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'small'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', bsSize: 'small' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', bsSize: 'small' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', bsSize: 'small' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', bsSize: 'small' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', bsSize: 'small' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', bsSize: 'small' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsSize'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'xsmall'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', bsSize: 'xsmall' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', bsSize: 'xsmall' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', bsSize: 'xsmall' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', bsSize: 'xsmall' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', bsSize: 'xsmall' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', bsSize: 'xsmall' },
            'link'
          )
        )
      )
    )
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Button States'
  ),
  _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement('td', { className: 'some-padding' }),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'DEFAULT'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', bsSize: 'large' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', bsSize: 'large' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', bsSize: 'large' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', bsSize: 'large' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', bsSize: 'large' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', bsSize: 'large' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'active'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', active: true },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', active: true },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', active: true },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', active: true },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', active: true },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', active: true },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'disabled'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', bsSize: 'small', disabled: true },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', bsSize: 'small', disabled: true },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'info', bsSize: 'small', disabled: true },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'warning', bsSize: 'small', disabled: true },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', bsSize: 'small', disabled: true },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', bsSize: 'small', disabled: true },
            'link'
          )
        )
      )
    )
  )
), '<Button bsStyle="..." bsSize="..." [active|disabled]>Button Text</Button>');

_pushExampleDom('DropdownButton and SplitButton', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement('td', { className: 'some-padding' }),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'primary'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'success'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'info'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'warning'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'danger'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          ),
          _react2.default.createElement(
            'span',
            { className: 'flag-value' },
            'link'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'SplitButton'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'primary', title: 'primary', id: 'dropdown-exp1-primary' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'success', title: 'success', id: 'dropdown-exp1-success' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'info', title: 'info', id: 'dropdown-exp1-info' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'warning', title: 'warning', id: 'dropdown-exp1-warning' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'danger', title: 'danger', id: 'dropdown-exp1-danger' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.SplitButton,
            { bsStyle: 'link', title: 'link', id: 'dropdown-exp1-link' },
            __getMenuItems()
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'DropdownButton'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'primary', title: 'primary', id: 'dropdown-exp2-primary' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'success', title: 'success', id: 'dropdown-exp2-success' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'info', title: 'info', id: 'dropdown-exp2-info' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'warning', title: 'warning', id: 'dropdown-exp2-warning' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'danger', title: 'danger', id: 'dropdown-exp2-danger' },
            __getMenuItems()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'link', title: 'link', id: 'dropdown-exp2-link' },
            __getMenuItems()
          )
        )
      )
    )
  )
), '<SplitButton bsStyle="..."  title="required" id="required">');

_pushExampleDom('ListGroup', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'active'
          ),
          ', ',
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'disabled'
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.Badge,
            null,
            'bsStyle'
          )
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.ListGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              null,
              'DEFAULT'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { active: true },
              'active'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { disabled: true },
              'disabled'
            )
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'some-padding' },
          _react2.default.createElement(
            _reactBootstrap.ListGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              null,
              'DEFAULT'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { bsStyle: 'success' },
              'success'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { bsStyle: 'info' },
              'info'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { bsStyle: 'warning' },
              'warning'
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { bsStyle: 'danger' },
              'danger'
            )
          )
        )
      )
    )
  )
), '<ListGroup>    <ListGroupItem bsStyle="..." [active|disabled]>item 111</ListGroupItem>    </ListGroup>');

var FieldGroup = function FieldGroup(params) {
  var id = params.id,
      label = params.label,
      help = params.help,
      props = params.props;

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    { controlId: id },
    _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ),
    _react2.default.createElement(_reactBootstrap.FormControl, props),
    help && _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      null,
      help
    )
  );
};

_pushExampleDom('Forms', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'Basic Form Stuffs'
  ),
  _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(FieldGroup, {
      id: 'formControlsText',
      type: 'text',
      label: 'Text',
      placeholder: 'Enter text'
    }),
    _react2.default.createElement(FieldGroup, {
      id: 'formControlsEmail',
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email'
    }),
    _react2.default.createElement(FieldGroup, {
      id: 'formControlsPassword',
      label: 'Password',
      type: 'password'
    }),
    _react2.default.createElement(FieldGroup, {
      id: 'formControlsFile',
      type: 'file',
      label: 'File',
      help: 'Example block-level help text here.'
    }),
    _react2.default.createElement(
      _reactBootstrap.Checkbox,
      { checked: true, readOnly: true },
      'Checkbox'
    ),
    _react2.default.createElement(
      _reactBootstrap.Radio,
      { checked: true, readOnly: true },
      'Radio'
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      null,
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        '1'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        '2'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        '3'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      null,
      _react2.default.createElement(
        _reactBootstrap.Radio,
        { name: 'radioGroup', inline: true },
        '1'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Radio,
        { name: 'radioGroup', inline: true },
        '2'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Radio,
        { name: 'radioGroup', inline: true },
        '3'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formControlsSelect' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Select'
      ),
      _react2.default.createElement(
        _reactBootstrap.FormControl,
        { componentClass: 'select', placeholder: 'select' },
        _react2.default.createElement(
          'option',
          { value: 'select' },
          'select'
        ),
        _react2.default.createElement(
          'option',
          { value: 'other' },
          '...'
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formControlsSelectMultiple' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Multiple select'
      ),
      _react2.default.createElement(
        _reactBootstrap.FormControl,
        { componentClass: 'select', multiple: true },
        _react2.default.createElement(
          'option',
          { value: 'select' },
          'select (multiple)'
        ),
        _react2.default.createElement(
          'option',
          { value: 'other' },
          '...'
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formControlsTextarea' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Textarea'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'textarea' })
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      null,
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Static text'
      ),
      _react2.default.createElement(
        _reactBootstrap.FormControl.Static,
        null,
        'email@example.com'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Button,
      { type: 'submit' },
      'Submit'
    )
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Validation State'
  ),
  _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationSuccess1', validationState: 'success' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with success'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
      _react2.default.createElement(
        _reactBootstrap.HelpBlock,
        null,
        'Help text with validation state.'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationWarning1', validationState: 'warning' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with warning'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationError1', validationState: 'error' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with error'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationNull', validationState: null },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with no validation state'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationSuccess2', validationState: 'success' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with success and feedback icon'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
      _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationWarning2', validationState: 'warning' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with warning and feedback icon'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
      _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationError2', validationState: 'error' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with error and feedback icon'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
      _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationSuccess3', validationState: 'success' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input with success and custom feedback icon'
      ),
      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
      _react2.default.createElement(
        _reactBootstrap.FormControl.Feedback,
        null,
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'music' })
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { controlId: 'formValidationWarning3', validationState: 'warning' },
      _react2.default.createElement(
        _reactBootstrap.ControlLabel,
        null,
        'Input group with warning'
      ),
      _react2.default.createElement(
        _reactBootstrap.InputGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.InputGroup.Addon,
          null,
          '@'
        ),
        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
      ),
      _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
    ),
    _react2.default.createElement(
      _reactBootstrap.Form,
      { componentClass: 'fieldset', horizontal: true },
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: 'formValidationError3', validationState: 'error' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { componentClass: _reactBootstrap.ControlLabel, xs: 3 },
          'Input with error'
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 9 },
          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: 'formValidationSuccess4', validationState: 'success' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { componentClass: _reactBootstrap.ControlLabel, xs: 3 },
          'Input group with success'
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 9 },
          _react2.default.createElement(
            _reactBootstrap.InputGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.InputGroup.Addon,
              null,
              '@'
            ),
            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
          ),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Form,
      { componentClass: 'fieldset', inline: true },
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: 'formValidationWarning4', validationState: 'warning' },
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          'Input with warning'
        ),
        ' ',
        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: 'formValidationError4', validationState: 'error' },
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          'Input group with error'
        ),
        ' ',
        _react2.default.createElement(
          _reactBootstrap.InputGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.InputGroup.Addon,
            null,
            '@'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
        ),
        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Checkbox,
      { validationState: 'success' },
      'Checkbox with success'
    ),
    _react2.default.createElement(
      _reactBootstrap.Radio,
      { validationState: 'warning' },
      'Radio with warning'
    ),
    _react2.default.createElement(
      _reactBootstrap.Checkbox,
      { validationState: 'error' },
      'Checkbox with error'
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { validationState: 'success' },
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        'Checkbox'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        'with'
      ),
      ' ',
      _react2.default.createElement(
        _reactBootstrap.Checkbox,
        { inline: true },
        'success'
      )
    )
  )
), '<Form> <FormGroup> <ControlLabel ... /> <FormControl /> <HelpBlock /> </FormGroup> </Form>');

var _sampleImageUrl1 = "https://react-bootstrap.github.io/assets/thumbnail.png";
var _sampleImageUrl2 = "https://react-bootstrap.github.io/assets/thumbnaildiv.png";

_pushExampleDom('Images, Thumbnails', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'Image Shapes'
  ),
  _react2.default.createElement(
    _reactBootstrap.Grid,
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(_reactBootstrap.Image, { src: _sampleImageUrl1, rounded: true })
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(_reactBootstrap.Image, { src: _sampleImageUrl1, circle: true })
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(_reactBootstrap.Image, { src: _sampleImageUrl1, thumbnail: true })
      )
    )
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Thumbnails'
  ),
  _react2.default.createElement(
    _reactBootstrap.Grid,
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 6, md: 3 },
        _react2.default.createElement(_reactBootstrap.Thumbnail, { href: '#', alt: '171x180', src: _sampleImageUrl1 })
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 6, md: 3 },
        _react2.default.createElement(_reactBootstrap.Thumbnail, { href: '#', alt: '171x180', src: _sampleImageUrl1 })
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 6, md: 3 },
        _react2.default.createElement(_reactBootstrap.Thumbnail, { href: '#', alt: '171x180', src: _sampleImageUrl1 })
      )
    )
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Thumbnails with Divider'
  ),
  _react2.default.createElement(
    _reactBootstrap.Grid,
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(
          _reactBootstrap.Thumbnail,
          { src: _sampleImageUrl2, alt: '242x200' },
          _react2.default.createElement(
            'h3',
            null,
            'Thumbnail label'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary' },
              'Button'
            ),
            '\xA0',
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'default' },
              'Button'
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(
          _reactBootstrap.Thumbnail,
          { src: _sampleImageUrl2, alt: '242x200' },
          _react2.default.createElement(
            'h3',
            null,
            'Thumbnail label'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary' },
              'Button'
            ),
            '\xA0',
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'default' },
              'Button'
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { md: 4 },
        _react2.default.createElement(
          _reactBootstrap.Thumbnail,
          { src: _sampleImageUrl2, alt: '242x200' },
          _react2.default.createElement(
            'h3',
            null,
            'Thumbnail label'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary' },
              'Button'
            ),
            '\xA0',
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'default' },
              'Button'
            )
          )
        )
      )
    )
  )
), '<Image src="..." alt="" /> or <Thumbnail src="..." alt="" />');

// icons
var iconList = ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'btc', 'xbt', 'yen', 'jpy', 'ruble', 'rub', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up'];

;
_pushExampleDom('Glyphicon', _react2.default.createElement(
  'article',
  null,
  iconList.map(function (icon) {
    return _react2.default.createElement(
      'div',
      { className: 'example-icon-wrapper', key: icon },
      _react2.default.createElement(
        _reactBootstrap.Button,
        { className: 'some-margin' },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon })
      ),
      _react2.default.createElement(
        'span',
        null,
        icon
      )
    );
  })
), '<Button>   <Glyphicon glyph="..." />   </Button>');

// modal examples
var ExampleModal = createReactClass({
  displayName: 'ExampleModal',
  getInitialState: function getInitialState() {
    return { showModal: false };
  },
  close: function close() {
    this.setState({ showModal: false });
  },
  open: function open() {
    this.setState({ showModal: true });
  },
  render: function render() {
    var popover = _react2.default.createElement(
      _reactBootstrap.Popover,
      { id: 'modal-popover', title: 'popover' },
      'very popover. such engagement'
    );
    var tooltip = _react2.default.createElement(
      _reactBootstrap.Tooltip,
      { id: 'modal-tooltip' },
      'wow.'
    );

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Click to get the full Modal experience!'
      ),
      _react2.default.createElement(
        _reactBootstrap.Button,
        {
          bsStyle: 'primary',
          onClick: this.open
        },
        'Launch demo modal'
      ),
      _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.showModal, onHide: this.close },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            'Modal heading'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Text in a modal'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Popover in a modal'
          ),
          _react2.default.createElement(
            'p',
            null,
            'there is a ',
            _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { overlay: popover },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'popover'
              )
            ),
            ' here'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Tooltips in a modal'
          ),
          _react2.default.createElement(
            'p',
            null,
            'there is a ',
            _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { overlay: tooltip },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'tooltip'
              )
            ),
            ' here'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'h4',
            null,
            'Overflowing text to show scroll behavior'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.close },
            'Close'
          )
        )
      )
    );
  }
});

_pushExampleDom('Modal', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(ExampleModal, null)
), '<Modal show={this.state.showModal} onHide={this.close}> ... </Modal>');

//popover
var popoverLeft = _react2.default.createElement(
  _reactBootstrap.Popover,
  { id: 'popover-positioned-left', title: 'Popover left' },
  'left tooltip'
);

var popoverTop = _react2.default.createElement(
  _reactBootstrap.Popover,
  { id: 'popover-positioned-top', title: 'Popover top' },
  'top tooltip'
);

var popoverBottom = _react2.default.createElement(
  _reactBootstrap.Popover,
  { id: 'popover-positioned-bottom', title: 'Popover bottom' },
  'bottom tooltip'
);

var popoverRight = _react2.default.createElement(
  _reactBootstrap.Popover,
  { id: 'popover-positioned-right', title: 'Popover right' },
  'right tooltip'
);
var ExampleTooltip = createReactClass({
  displayName: 'ExampleTooltip',
  getInitialState: function getInitialState() {
    return { show: true };
  },
  toggle: function toggle() {
    this.setState({ show: !this.state.show });
  },
  render: function render() {
    var _this = this;

    var sharedProps = {
      show: this.state.show,
      container: this,
      target: function target() {
        return _reactDom2.default.findDOMNode(_this.refs.target);
      }
    };

    return _react2.default.createElement(
      'div',
      { style: { height: 100, paddingLeft: 150, position: 'relative' } },
      _react2.default.createElement(
        _reactBootstrap.Button,
        { ref: 'target', onClick: this.toggle },
        'Click me!'
      ),
      _react2.default.createElement(
        _reactBootstrap.Overlay,
        _extends({}, sharedProps, { placement: 'left' }),
        _react2.default.createElement(
          _reactBootstrap.Tooltip,
          { id: 'overload-left' },
          'left Tooltip'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Overlay,
        _extends({}, sharedProps, { placement: 'top' }),
        _react2.default.createElement(
          _reactBootstrap.Tooltip,
          { id: 'overload-top' },
          'top Tooltip'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Overlay,
        _extends({}, sharedProps, { placement: 'right' }),
        _react2.default.createElement(
          _reactBootstrap.Tooltip,
          { id: 'overload-right' },
          'right Tooltip'
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Overlay,
        _extends({}, sharedProps, { placement: 'bottom' }),
        _react2.default.createElement(
          _reactBootstrap.Tooltip,
          { id: 'overload-bottom' },
          'bottom Tooltip'
        )
      )
    );
  }
});

_pushExampleDom('Popover (tooltip)', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'Tooltip'
  ),
  _react2.default.createElement(ExampleTooltip, null),
  _react2.default.createElement(
    'h3',
    null,
    'Popover'
  ),
  _react2.default.createElement(
    _reactBootstrap.ButtonToolbar,
    null,
    _react2.default.createElement(
      _reactBootstrap.OverlayTrigger,
      { trigger: ['hover', 'focus'], placement: 'left', overlay: popoverLeft },
      _react2.default.createElement(
        _reactBootstrap.Button,
        null,
        'left Popover on Hover'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.OverlayTrigger,
      { trigger: ['hover', 'focus'], placement: 'top', overlay: popoverTop },
      _react2.default.createElement(
        _reactBootstrap.Button,
        null,
        'top Popover on Hover'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.OverlayTrigger,
      { trigger: ['hover', 'focus'], placement: 'bottom', overlay: popoverBottom },
      _react2.default.createElement(
        _reactBootstrap.Button,
        null,
        'bottom Popover on Hover'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.OverlayTrigger,
      { trigger: ['hover', 'focus'], placement: 'right', overlay: popoverRight },
      _react2.default.createElement(
        _reactBootstrap.Button,
        null,
        'right Popover on Hover'
      )
    )
  )
), '<OverlayTrigger trigger="hover|focus|click" placement="left" overlay={popoverLeft}>    <Button>Holy guacamole!</Button>    </OverlayTrigger>');

_pushExampleDom('Tabs - Simple', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'Simple Tab'
  ),
  _react2.default.createElement(
    _reactBootstrap.Tabs,
    { defaultActiveKey: 2, id: 'uncontrolled-tab-example' },
    _react2.default.createElement(
      _reactBootstrap.Tab,
      { eventKey: 1, title: 'Tab 1' },
      'Tab 1 content'
    ),
    _react2.default.createElement(
      _reactBootstrap.Tab,
      { eventKey: 2, title: 'Tab 2' },
      'Tab 2 content'
    ),
    _react2.default.createElement(
      _reactBootstrap.Tab,
      { eventKey: 3, title: 'Tab 3', disabled: true },
      'Tab 3 content'
    )
  )
), '<Tabs> <Tab></Tab> </Tabs>');

_pushExampleDom('Tabs - Complex (More Flexible)', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    _reactBootstrap.Tab.Container,
    { id: 'tabs-with-dropdown', defaultActiveKey: 'first' },
    _react2.default.createElement(
      _reactBootstrap.Row,
      { className: 'clearfix' },
      _react2.default.createElement(
        _reactBootstrap.Col,
        { sm: 12 },
        _react2.default.createElement(
          _reactBootstrap.Nav,
          { bsStyle: 'tabs' },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 'first' },
            'Tab 1'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 'second' },
            'Tab 2'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { eventKey: '3', title: 'Dropdown', id: 'nav-dropdown-within-tab' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3.1' },
              'Action'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3.2' },
              'Another action'
            ),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3.3' },
              'Something else here'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '3.4' },
              'Separated link'
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { sm: 12 },
        _react2.default.createElement(
          _reactBootstrap.Tab.Content,
          { animation: true },
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: 'first' },
            'Tab 1 content'
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: 'second' },
            'Tab 2 content'
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: '3.1' },
            'Tab 3.1 content'
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: '3.2' },
            'Tab 3.2 content'
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: '3.3' },
            'Tab 3.3 content'
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab.Pane,
            { eventKey: '3.4' },
            'Tab 3.4 content'
          )
        )
      )
    )
  )
), '<Tabs> <Tab></Tab> </Tabs>');

var PaginationBasic = _react2.default.createClass({
  displayName: 'PaginationBasic',
  getInitialState: function getInitialState() {
    return {
      activePage: 1
    };
  },
  handleSelect: function handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactBootstrap.Pagination, {
        bsSize: 'large',
        items: 10,
        activePage: this.state.activePage,
        onSelect: this.handleSelect }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(_reactBootstrap.Pagination, {
        bsSize: 'medium',
        items: 10,
        activePage: this.state.activePage,
        onSelect: this.handleSelect }),
      _react2.default.createElement('br', null),
      _react2.default.createElement(_reactBootstrap.Pagination, {
        bsSize: 'small',
        items: 10,
        activePage: this.state.activePage,
        onSelect: this.handleSelect })
    );
  }
});

_pushExampleDom('Pagination', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(
    'h3',
    null,
    'DEFAULT'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'success', now: 40 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'info', now: 20 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'warning', now: 60 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'danger', now: 80 })
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Striped'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'success', now: 40 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'info', now: 20 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'warning', now: 60 }),
    _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'danger', now: 80 })
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Animated'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, now: 45 })
  ),
  _react2.default.createElement(
    'h3',
    null,
    'Stacked'
  ),
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.ProgressBar,
      null,
      _react2.default.createElement(_reactBootstrap.ProgressBar, { striped: true, bsStyle: 'success', now: 35, key: 1 }),
      _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'warning', now: 20, key: 2 }),
      _react2.default.createElement(_reactBootstrap.ProgressBar, { active: true, bsStyle: 'danger', now: 10, key: 3 })
    )
  )
), '<Pagination />');

_pushExampleDom('Pagination', _react2.default.createElement(
  'article',
  null,
  _react2.default.createElement(PaginationBasic, null)
), '<Pagination />');

//////////////////////////////////
// finally render the examples...
//////////////////////////////////
//render
_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _getExampleDomList()
), mountNode);