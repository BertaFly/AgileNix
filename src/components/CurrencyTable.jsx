import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as actionCreators from '../store/actions.js';

class CurrencyTable extends Component {
    constructor(props) {
        super(props);
        props.loadCurrencyData();
        this.state = {
            activePage: 1
        }
    }

    pageChangeHandler = (e, { activePage }) => {
        this.setState({ activePage });
        this.props.loadCurrencyToShow(this.props.currencyAll, activePage);
    }

    render() {
        return (
            <Table celled unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>&#8470;</Table.HeaderCell>
                        <Table.HeaderCell>Currency Name</Table.HeaderCell>
                        <Table.HeaderCell>Picture</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.currencyDisplayed.length !== 0 &&
                        this.props.currencyDisplayed.map((currency, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>{currency.nbr}</Table.Cell>
                                <Table.Cell>{currency.name}</Table.Cell>
                                <Table.Cell>
                                    <img src={currency.logo} 
                                        alt={currency.name} 
                                        style={{width: '50px', height: '50px'}}/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Pagination 
                        activePage={this.state.activePage}
                        totalPages={this.props.totalPage}
                        onPageChange={this.pageChangeHandler}
                        floated='right'/>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}

const mapStateToProps = state => {
    return {
        test: state.test,
        totalPage: Math.ceil(state.currencyAll.length / 20),
        currencyAll: state.currencyAll,
        currencyDisplayed: state.currencyDisplayed
    }
}

export default connect(mapStateToProps, actionCreators)(CurrencyTable);