import React from 'react';
import PropTypes from 'prop-types'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import VHText from '../../Text'

const animatedComponents = makeAnimated();

const VHSelect = props =>  {
  return (
    <React.Fragment>
      {
        props.caption &&
          <VHText
            text={props.caption}
            variant="platform1"
          />
      }
      <Select
        closeMenuOnSelect={!props.isMulti}
        className={props.className}
        isLoading={props.isLoading}
        isDisabled={props.isLoading}
        components={animatedComponents}
        defaultValue={props.currentItem}
        isMulti={props.isMulti}
        isClearable={true}
        options={props.items}
        onChange={(newValue, actionMeta) => {
          switch(true) {
            case actionMeta.action === "remove-value":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: actionMeta.removedValue,
                  action: 'delete'
                }
              })
              break
            case actionMeta.action === "clear":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: null,
                  action: "clear"
                }
              })
              break
            case actionMeta.action === "select-option":
              props.onEvent({
                type: "OnChange",
                origin: "VHSelect",
                props: {
                  data: props.data,
                  item: props.isMulti ? actionMeta.option : newValue,
                  action: 'add'
                }
              })
              break
          }
        }}
      />
      {
        props.description &&
          <VHText
            text={props.description}
            variant="caption"
            color={props.descriptionColor}
          />
      }
    </React.Fragment>
  );
}

export default VHSelect
