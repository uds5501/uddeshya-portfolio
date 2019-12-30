import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img className="img-fluid rounded shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AboutImg;
