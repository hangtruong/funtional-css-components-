import React from 'react'

export default class AlbumItem extends React.Component { // eslint-disable-line
  props: {
    link: string,
    imageSrc: string,
    imageAlt: string,
    title: string,
    artist: string,
  };

  render() {
    const {
      link,
      imageSrc,
      imageAlt,
      title,
      artist,
    } = this.props

    return (
      <div className="fl w-50 w-25-m w-20-l pa2">
        <a href={link} className="db link dim tc">
          <img src={imageSrc} alt={imageAlt} className="w-100 db outline black-10" />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0 black truncate w-100">{title}</dd>
            <dt className="clip">Artist</dt>
            <dd className="ml0 gray truncate w-100">{artist}</dd>
          </dl>
        </a>
      </div>
    )
  }
}
