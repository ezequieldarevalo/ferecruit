import React from 'react'
import { MessageContainer, MessageContent } from './styles'
import ErrorImage from '../../common/icons/ErrorImage'
import AlertImage from '../../common/icons/AlertImage'
import SuccessImage from '../../common/icons/SuccessImage'
import WarningImage from '../../common/icons/WarningImage'

const INFO_COLOR = '#654BB9'
const ERROR_COLOR = '#b80000'
const SUCCESS_COLOR = '#238d48'
const WARNING_COLOR = '#d68227'

interface MessageWrapperProps {
  type: 'INFO' | 'ERROR' | 'SUCCESS' | 'WARNING'
  children: any
}

const ICONS: any = {
  INFO: <AlertImage />,
  ERROR: <ErrorImage />,
  SUCCESS: <SuccessImage />,
  WARNING: <WarningImage />
}

const COLORS = {
  INFO: INFO_COLOR,
  ERROR: ERROR_COLOR,
  SUCCESS: SUCCESS_COLOR,
  WARNING: WARNING_COLOR
}

const loadIcon = (type: string): JSX.Element => {
  return ICONS[type]
}

function Message ({ type, children }: MessageWrapperProps): JSX.Element {
  return (
    <MessageContainer color={COLORS[type]}>
      {loadIcon(type)}
      <MessageContent>{children}</MessageContent>
    </MessageContainer>
  )
}

export default Message
