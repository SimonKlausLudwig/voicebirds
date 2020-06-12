import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import Layout from "../../../test_project/src/layout";
import FilterGrid from "../../../test_project/src/filtergrid";
import BlockTitle from "../../../test_project/src/title";
import Container from "../../../test_project/src/container";
import SEO from "../../../test_project/src/seo/seo";
import Video, {VideoType} from "../../../test_project/src/video/video";
import {graphql} from "gatsby";
import Select from "../../../test_project/src/select";
import * as style from './style.module.scss';

var getLink = function (second: number, id: string) {
  return `https://res.cloudinary.com/hvioxpubt/video/upload/w_${Math.round(400 * 1.777777777777778)},h_${400},q_auto,f_auto/so_${second},eo_${second}${id}`;
}


// @ts-ignore
const BeispielePage: React.FC = (props: any) => {
  console.log(props);
  const videos: VideoType[] = props.data.allCloudinaryMedia.edges.map((edge: any) => {
    return {
      src: edge.node.secure_url,
      id: edge.node.public_id,
      hoverVideo: `https://res.cloudinary.com/hvioxpubt/video/upload/e_preview:duration_5:max_seg_4:min_seg_dur_1.5/w_480,e_volume:mute${edge.node.public_id}`,
      poster: getLink(12, edge.node.public_id),
      posterAlt: getLink(0, edge.node.public_id)
    }
  });

  console.log(videos);


  return (
    <Layout>
      <SEO siteProps={props}/>
      <Illustration/>


      <Container>
        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>


        <Select className={style.filterBar} options={['Budget', 'Premium', 'Enterprise']} value={"Budget"} setValue={() => {}}/>
        <FilterGrid items={(filter: any) => {
          return videos.map(video => <Video video={{
            src: video.src,
            poster: video.src,
            id: video.src,
            hoverVideo: video.src
          }} showRibbon={false}/>)
        }}/>
      </Container>


    </Layout>)
};

export const query = graphql`
  query CloudinaryImages {
  allCloudinaryMedia(limit: 300) {
    edges {
      node {
        secure_url
        public_id
      }
    }
  }
}

`

export default BeispielePage;
