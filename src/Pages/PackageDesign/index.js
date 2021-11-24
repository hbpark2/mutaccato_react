import React from 'react'
import {LightgalleryProvider, LightgalleryItem, useLightgallery} from 'react-lightgallery'
import {packageData} from '../../ImageData/packageData'
import LayerBox from '../../Components/Common/LayerBox'
import {Container, Image, ListWrap, OpenGalleryBtn} from '../../Components/Common/LightgalleryGrid'

const Package = () => {
  const PhotoItem = ({image, thumb, group}) => (
    <OpenGalleryBtn>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <Image bg={image} />
        <LayerBox />
      </LightgalleryItem>
    </OpenGalleryBtn>
  )

  return (
    <Container>
      <ListWrap>
        <LightgalleryProvider>
          {packageData.map((p, idx) => (
            <PhotoItem key={idx} image={p} group={'01'} />
          ))}
        </LightgalleryProvider>
      </ListWrap>
    </Container>
  )
}
export default Package
