import React from 'react'
import PropTypes from 'prop-types'
import Button, { OutlinedButton, } from './styles'

const VHButton = props => {

  const [closeModal, setCloseModal] = React.useState(props.closeModal);
  React.useEffect(() => {
    setCloseModal(props.closeModal);
  }, [props.closeModal])

  if (props.outline) {
    return (
      <OutlinedButton
        id={props.id}
        primary={props.primary}
        white={props.white}
        secondary={props.secondary}
        danger={props.danger}
        black={props.black}
        full={props.full}
        nowrap={props.nowrap}
        disabled={props.disabled}
        className={`vh-button-component ${props.className ? props.className : ''}`}
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        type="button"
        onClick={() => {
          props.onEvent({
            type: "OnClick",
            origin: "VHButton",
            props: {
              data: props.data
            }
          })
        }}>
        {
          props.label
        }
      </OutlinedButton>
    )
  }
  return (
    <Button
      id={props.id}
      primary={props.primary}
      secondary={props.secondary}
      danger={props.danger}
      black={props.black}
      full={props.full}
      disabled={props.disabled}
      className={`vh-button-component ${props.className ? props.className : ''}`}
      xs={props.xs}
      sm={props.sm}
      lg={props.lg}
      nowrap={props.nowrap}
      type="button"
      onClick={() => {
        if (props.setNewExperience) {
          props.setNewExperience()
        }
        if (props.onOpen) {
          props.onOpen()
        }
        else if (closeModal) {
          props.onClose()
        }
        props.onEvent({
          type: "OnClick",
          origin: "VHButton",
          props: {
            data: props.data
          }
        })
      }}>
      {
        props.label
      }
    </Button>
  )
}

VHButton.defaultProps = {
  disabled: false,
  danger: false,
  nowrap: false,
  secondary: false,
  className: '',
  primary: true,
}

VHButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  black: PropTypes.bool,
  nowrap: PropTypes.bool,
  disabled: PropTypes.bool,
  onEvent: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default VHButton
