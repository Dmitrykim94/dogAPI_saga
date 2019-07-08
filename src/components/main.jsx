import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
class Main extends React.Component {
    state = {

    }

    render() {
        // console.log(this.props.data);

        return (
            <div >
                <button onClick={() => this.props.dispatch(fetchData())}>dog</button>
                <p></p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {this.props.data.loading
                        ? <p>Loading...</p>
                        : this.props.data.error
                            ? <p>Error, try again</p>
                            : <div ><img style={{width: '500px', height: '500px' }} alt={'Dog picture'} src={this.props.data.url} /></div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Main);