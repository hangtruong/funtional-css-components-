// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import AlbumList from 'components/AlbumList'

storiesOf('AlbumList', module)
  .add('Normal', () => <AlbumList />)
