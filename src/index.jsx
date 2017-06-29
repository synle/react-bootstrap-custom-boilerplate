// css code
require('./index.scss');

// js code
import React from 'react';
import ReactDom from 'react-dom';

import { Accordion, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Carousel, CarouselItem, Checkbox, Clearfix, CloseButton, ControlLabel, Col, Collapse, Dropdown, DropdownButton, Fade, Form, FormControl, FormGroup, Glyphicon, Grid, HelpBlock, Image, InputGroup, Jumbotron, Label, ListGroup, ListGroupItem, Media, MenuItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, Overlay, OverlayTrigger, PageHeader, PageItem, Pager, Pagination, PaginationButton, Panel, PanelGroup, Popover, ProgressBar, Radio, ResponsiveEmbed, Row, SafeAnchor, SplitButton, Tab, TabContainer, TabContent, Table, TabPane, Tabs, Thumbnail, Tooltip, Well } from 'react-bootstrap';


// mount node
const mountNode = document.getElementById('app-container');

// examples...
let exampleDoms = [];

// function to get the dom...
const _getExampleDom = (elmTitle, elmContent, elmSnippet) => {
    return (
        <Panel header={elmTitle} footer={elmSnippet}>
            {elmContent}
        </Panel>
//        <div className="example-section">
//            <div className="example-section-title">{elmTitle}</div>
//            <div className="example-section-content">
//                {elmContent}
//            </div>
//        </div>
    );
};

const _pushExampleDom = (elmTitle, elmContent, elmSnippet) => {
    exampleDoms.push(
        _getExampleDom(
            elmTitle,
            elmContent,
            elmSnippet
        )
    );
};

const _getExampleDomList = () => {
    // function that handle the mapping
    let counter = 0;
    return exampleDoms.map( (curDom) => {
        counter++;
        return <div key={counter}>{curDom}</div>
    });
}


const __getMenuItems = () => {
    return [
        <MenuItem eventKey="1" key="1">item 1</MenuItem>,
        <MenuItem eventKey="2" key="2">item 2</MenuItem>,
        <MenuItem divider key="0" />,
        <MenuItem eventKey="3" key="3">item 3</MenuItem>
    ];
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

_pushExampleDom(
    'Button',
    (
        <article>
            <h3>Button Sizes</h3>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">large</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">DEFAULT</span></td>
                    <td className="some-padding"><Button bsStyle="primary">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">small</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="small">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="small">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="small">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="small">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="small">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="small">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">xsmall</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="xsmall">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="xsmall">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="xsmall">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="xsmall">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="xsmall">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="xsmall">link</Button></td>
                </tr>
                </tbody>
            </table>

            <h3>Button States</h3>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>DEFAULT</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>active</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" active>primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" active>success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" active>info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" active>warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" active>danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" active>link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>disabled</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="small" disabled>primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="small" disabled>success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="small" disabled>info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="small" disabled>warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="small" disabled>danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="small" disabled>link</Button></td>
                </tr>
                </tbody>
            </table>
        </article>
    ),
    '<Button bsStyle="..." bsSize="..." [active|disabled]>Button Text</Button>'
)


_pushExampleDom(
    'DropdownButton and SplitButton',
    (
        <article>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>SplitButton</Badge></td>
                    <td className="some-padding">
                        <SplitButton bsStyle="primary" title="primary" id="dropdown-exp1-primary">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                    <td className="some-padding">
                        <SplitButton bsStyle="success" title="success" id="dropdown-exp1-success">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                    <td className="some-padding">
                        <SplitButton bsStyle="info" title="info" id="dropdown-exp1-info">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                    <td className="some-padding">
                        <SplitButton bsStyle="warning" title="warning" id="dropdown-exp1-warning">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                    <td className="some-padding">
                        <SplitButton bsStyle="danger" title="danger" id="dropdown-exp1-danger">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                    <td className="some-padding">
                        <SplitButton bsStyle="link" title="link" id="dropdown-exp1-link">
                            { __getMenuItems() }
                        </SplitButton>
                    </td>
                </tr>

                <tr>
                    <td className="some-padding"><Badge>DropdownButton</Badge></td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="primary" title="primary" id="dropdown-exp2-primary">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="success" title="success" id="dropdown-exp2-success">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="info" title="info" id="dropdown-exp2-info">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="warning" title="warning" id="dropdown-exp2-warning">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="danger" title="danger" id="dropdown-exp2-danger">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                    <td className="some-padding">
                        <DropdownButton bsStyle="link" title="link" id="dropdown-exp2-link">
                            { __getMenuItems() }
                        </DropdownButton>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    ),
    '<SplitButton bsStyle="..."  title="required" id="required">'
);




_pushExampleDom(
    'ListGroup',
    (
        <article>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding">
                        <Badge>active</Badge>, <Badge>disabled</Badge>
                    </td>
                    <td className="some-padding">
                        <Badge>bsStyle</Badge>
                    </td>
                </tr>
                <tr>
                    <td className="some-padding">
                        <ListGroup>
                            <ListGroupItem>DEFAULT</ListGroupItem>
                            <ListGroupItem active>active</ListGroupItem>
                            <ListGroupItem disabled>disabled</ListGroupItem>
                        </ListGroup>
                    </td>
                    <td className="some-padding">
                        <ListGroup>
                            <ListGroupItem>DEFAULT</ListGroupItem>
                            <ListGroupItem bsStyle="success">success</ListGroupItem>
                            <ListGroupItem bsStyle="info">info</ListGroupItem>
                            <ListGroupItem bsStyle="warning">warning</ListGroupItem>
                            <ListGroupItem bsStyle="danger">danger</ListGroupItem>
                        </ListGroup>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    ),
    '<ListGroup>    <ListGroupItem bsStyle="..." [active|disabled]>item 111</ListGroupItem>    </ListGroup>'
);



const FieldGroup = function (params) {
    const {id, label, help, props} = params;
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

_pushExampleDom(
    'Forms',
    (
        <article>
            <h3>Basic Form Stuffs</h3>
            <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Text"
              placeholder="Enter text"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="File"
              help="Example block-level help text here."
            />

            <Checkbox checked readOnly>
              Checkbox
            </Checkbox>
            <Radio checked readOnly>
              Radio
            </Radio>

            <FormGroup>
              <Checkbox inline>
                1
              </Checkbox>
              {' '}
              <Checkbox inline>
                2
              </Checkbox>
              {' '}
              <Checkbox inline>
                3
              </Checkbox>
            </FormGroup>
            <FormGroup>
              <Radio name="radioGroup" inline>
                1
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                2
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                3
              </Radio>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple">
              <ControlLabel>Multiple select</ControlLabel>
              <FormControl componentClass="select" multiple>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl.Static>
                email@example.com
              </FormControl.Static>
            </FormGroup>

            <Button type="submit">
              Submit
            </Button>
          </form>


          <h3>Validation State</h3>
          <form>
            <FormGroup controlId="formValidationSuccess1" validationState="success">
              <ControlLabel>Input with success</ControlLabel>
              <FormControl type="text" />
              <HelpBlock>Help text with validation state.</HelpBlock>
            </FormGroup>

            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <ControlLabel>Input with warning</ControlLabel>
              <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationError1" validationState="error">
              <ControlLabel>Input with error</ControlLabel>
              <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationNull" validationState={null}>
              <ControlLabel>Input with no validation state</ControlLabel>
              <FormControl type="text" />
            </FormGroup>

            <FormGroup controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>Input with success and feedback icon</ControlLabel>
              <FormControl type="text" />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationWarning2" validationState="warning">
              <ControlLabel>Input with warning and feedback icon</ControlLabel>
              <FormControl type="text" />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationError2" validationState="error">
              <ControlLabel>Input with error and feedback icon</ControlLabel>
              <FormControl type="text" />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formValidationSuccess3" validationState="success">
              <ControlLabel>Input with success and custom feedback icon</ControlLabel>
              <FormControl type="text" />
              <FormControl.Feedback>
                <Glyphicon glyph="music" />
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup controlId="formValidationWarning3" validationState="warning">
              <ControlLabel>Input group with warning</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <FormControl.Feedback />
            </FormGroup>

            <Form componentClass="fieldset" horizontal>
              <FormGroup controlId="formValidationError3" validationState="error">
                <Col componentClass={ControlLabel} xs={3}>
                  Input with error
                </Col>
                <Col xs={9}>
                  <FormControl type="text" />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup controlId="formValidationSuccess4" validationState="success">
                <Col componentClass={ControlLabel} xs={3}>
                  Input group with success
                </Col>
                <Col xs={9}>
                  <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl type="text" />
                  </InputGroup>
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            </Form>

            <Form componentClass="fieldset" inline>
              <FormGroup controlId="formValidationWarning4" validationState="warning">
                <ControlLabel>Input with warning</ControlLabel>
                {' '}
                <FormControl type="text" />
                <FormControl.Feedback />
              </FormGroup>
              {' '}
              <FormGroup controlId="formValidationError4" validationState="error">
                <ControlLabel>Input group with error</ControlLabel>
                {' '}
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="text" />
                </InputGroup>
                <FormControl.Feedback />
              </FormGroup>
            </Form>

            <Checkbox validationState="success">
              Checkbox with success
            </Checkbox>
            <Radio validationState="warning">
              Radio with warning
            </Radio>
            <Checkbox validationState="error">
              Checkbox with error
            </Checkbox>

            {/* This requires React 15's <span>-less spaces to be exactly correct. */}
            <FormGroup validationState="success">
              <Checkbox inline>
                Checkbox
              </Checkbox>
              {' '}
              <Checkbox inline>
                with
              </Checkbox>
              {' '}
              <Checkbox inline>
                success
              </Checkbox>
            </FormGroup>
          </form>
      </article>
    ),
    '<Form> <FormGroup> <ControlLabel ... /> <FormControl /> <HelpBlock /> </FormGroup> </Form>'
);




const _sampleImageUrl1 = "https://react-bootstrap.github.io/assets/thumbnail.png";
const _sampleImageUrl2 = "https://react-bootstrap.github.io/assets/thumbnaildiv.png";

_pushExampleDom(
    'Images, Thumbnails',
    (
        <article>
            <h3>Image Shapes</h3>
            <Grid>
                <Row>
                  <Col md={4}>
                    <Image src={_sampleImageUrl1} rounded />
                  </Col>
                  <Col md={4}>
                    <Image src={_sampleImageUrl1} circle />
                  </Col>
                  <Col md={4}>
                    <Image src={_sampleImageUrl1} thumbnail />
                  </Col>
                </Row>
            </Grid>


            <h3>Thumbnails</h3>
            <Grid>
              <Row>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={_sampleImageUrl1} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={_sampleImageUrl1} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={_sampleImageUrl1} />
              </Col>
              </Row>
            </Grid>


            <h3>Thumbnails with Divider</h3>
            <Grid>
                <Row>
                <Col md={4}>
                  <Thumbnail src={_sampleImageUrl2} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={4}>
                  <Thumbnail src={_sampleImageUrl2} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={4}>
                  <Thumbnail src={_sampleImageUrl2} alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Col>
                </Row>
              </Grid>
        </article>
    ),
    '<Image src="..." alt="" /> or <Thumbnail src="..." alt="" />'
)



// icons
let iconList = [
'asterisk',
'plus',
'euro',
'eur',
'minus',
'cloud',
'envelope',
'pencil',
'glass',
'music',
'search',
'heart',
'star',
'star-empty',
'user',
'film',
'th-large',
'th',
'th-list',
'ok',
'remove',
'zoom-in',
'zoom-out',
'off',
'signal',
'cog',
'trash',
'home',
'file',
'time',
'road',
'download-alt',
'download',
'upload',
'inbox',
'play-circle',
'repeat',
'refresh',
'list-alt',
'lock',
'flag',
'headphones',
'volume-off',
'volume-down',
'volume-up',
'qrcode',
'barcode',
'tag',
'tags',
'book',
'bookmark',
'print',
'camera',
'font',
'bold',
'italic',
'text-height',
'text-width',
'align-left',
'align-center',
'align-right',
'align-justify',
'list',
'indent-left',
'indent-right',
'facetime-video',
'picture',
'map-marker',
'adjust',
'tint',
'edit',
'share',
'check',
'move',
'step-backward',
'fast-backward',
'backward',
'play',
'pause',
'stop',
'forward',
'fast-forward',
'step-forward',
'eject',
'chevron-left',
'chevron-right',
'plus-sign',
'minus-sign',
'remove-sign',
'ok-sign',
'question-sign',
'info-sign',
'screenshot',
'remove-circle',
'ok-circle',
'ban-circle',
'arrow-left',
'arrow-right',
'arrow-up',
'arrow-down',
'share-alt',
'resize-full',
'resize-small',
'exclamation-sign',
'gift',
'leaf',
'fire',
'eye-open',
'eye-close',
'warning-sign',
'plane',
'calendar',
'random',
'comment',
'magnet',
'chevron-up',
'chevron-down',
'retweet',
'shopping-cart',
'folder-close',
'folder-open',
'resize-vertical',
'resize-horizontal',
'hdd',
'bullhorn',
'bell',
'certificate',
'thumbs-up',
'thumbs-down',
'hand-right',
'hand-left',
'hand-up',
'hand-down',
'circle-arrow-right',
'circle-arrow-left',
'circle-arrow-up',
'circle-arrow-down',
'globe',
'wrench',
'tasks',
'filter',
'briefcase',
'fullscreen',
'dashboard',
'paperclip',
'heart-empty',
'link',
'phone',
'pushpin',
'usd',
'gbp',
'sort',
'sort-by-alphabet',
'sort-by-alphabet-alt',
'sort-by-order',
'sort-by-order-alt',
'sort-by-attributes',
'sort-by-attributes-alt',
'unchecked',
'expand',
'collapse-down',
'collapse-up',
'log-in',
'flash',
'log-out',
'new-window',
'record',
'save',
'open',
'saved',
'import',
'export',
'send',
'floppy-disk',
'floppy-saved',
'floppy-remove',
'floppy-save',
'floppy-open',
'credit-card',
'transfer',
'cutlery',
'header',
'compressed',
'earphone',
'phone-alt',
'tower',
'stats',
'sd-video',
'hd-video',
'subtitles',
'sound-stereo',
'sound-dolby',
'sound-5-1',
'sound-6-1',
'sound-7-1',
'copyright-mark',
'registration-mark',
'cloud-download',
'cloud-upload',
'tree-conifer',
'tree-deciduous',
'cd',
'save-file',
'open-file',
'level-up',
'copy',
'paste',
'alert',
'equalizer',
'king',
'queen',
'pawn',
'bishop',
'knight',
'baby-formula',
'tent',
'blackboard',
'bed',
'apple',
'erase',
'hourglass',
'lamp',
'duplicate',
'piggy-bank',
'scissors',
'bitcoin',
'btc',
'xbt',
'yen',
'jpy',
'ruble',
'rub',
'scale',
'ice-lolly',
'ice-lolly-tasted',
'education',
'option-horizontal',
'option-vertical',
'menu-hamburger',
'modal-window',
'oil',
'grain',
'sunglasses',
'text-size',
'text-color',
'text-background',
'object-align-top',
'object-align-bottom',
'object-align-horizontal',
'object-align-left',
'object-align-vertical',
'object-align-right',
'triangle-right',
'triangle-left',
'triangle-bottom',
'triangle-top',
'console',
'superscript',
'subscript',
'menu-left',
'menu-right',
'menu-down',
'menu-up',
];


;
_pushExampleDom(
    'Glyphicon',
    (
        <article>
            {
                iconList.map( icon =>
                    <Button key={icon} title={icon} onClick={() => alert(icon)}>
                        <Glyphicon glyph={icon} />
                    </Button>
                )
            }
        </article>
    ),
    '<Button>   <Glyphicon glyph="..." />   </Button>'
)

//render
ReactDom.render(
    <div>
        { _getExampleDomList() }
    </div>,
    mountNode
);
