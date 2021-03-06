import React from 'react';
import PropTypes from 'prop-types';
import VHIconText from "../IconText/index";


const VHIconTitleList = (props) => {
    if(props.items !== null){
    let items = []
    if (props.items) {
        items = props.items
    }
    if (!props.profile) {
        if (!Array.isArray(props.items)) {
            return <VHIconText
                iconColor={props.color || "gray-30"}
                textColor={props.color || "gray-90"}
                text={props.items}
                icon="bullet"
                className={`vh-icon-title-list ${props.className ? props.className : ''}`}
                variant="platform"
                data={props.data}
                onEvent={props.onEvent}
            />
        }
    }
    else {
        items = JSON.parse(props.items)
    }
    return (
        <>
            {
                items.map(text => (
                    <VHIconText
                        iconColor={"gray-30"}
                        textColor={"gray-90"}
                        text={text.Value}
                        icon="bullet"
                        className={`vh-icon-title-list ${props.className ? props.className : ''}`}
                        variant="platform"
                        data={props.data}
                        onEvent={props.onEvent}
                        profile={true}
                    />
                ))
            }
        </>
    )
        }else{
            return(
                <div />
            )
        }
}

VHIconTitleList.propTypes = {
    onEvent: PropTypes.func,
    items: PropTypes.array.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHIconTitleList;
