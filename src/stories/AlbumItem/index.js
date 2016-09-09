// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import AlbumItem from 'components/AlbumItem'

storiesOf('AlbumItem', module)
  .add('Normal', () => (
    <div>
      <AlbumItem
        link="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
        imageSrc="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png"
        imageAlt="Frank Ocean Blonde Album Cover"
        title="Hang Truong"
        artist="Frank Ocean"
      />
      <AlbumItem
        link="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
        imageSrc="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png"
        imageAlt="Frank Ocean Blonde Album Cover"
        title="Blonde"
        artist="Frank Ocean"
      />
    </div>
  ))
