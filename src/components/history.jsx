import React from 'react'
import { connect } from 'react-redux';
import {delAC} from '../actions/actions'
class History extends React.Component {
    state = {

    }

    handleClick = (item) => {
        // console.log(item);
        this.props.delAC(item)
    }

    render() {
        // console.log(this.props.data.historyArr);

        return (
            <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {this.props.data.historyArr.map((item, key) => {
                    return (<div key={key} >
                        <p>Загружено в {item.date}<button onClick={() => this.handleClick(item)}>удалить</button></p>
                        <img style={{ width: '500px', height: '500px' }} src={item.url} />
                        <br />

                    </div>)
                })
                }
                <h3>История загрузок:</h3>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    data: state
})

const mapDispatchToProps = dispatch => ({
    delAC: (title) => dispatch(delAC(title))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History);