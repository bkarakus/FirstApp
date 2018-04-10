export default {

  generateBackdropImageURL: ( config, imagePath, small ) => {
    const { images } = config;
    const { secure_base_url, backdrop_sizes } = images;
    const size = backdrop_sizes[ small ? 0 : (backdrop_sizes.length-1) ];
    return `${secure_base_url}${size}${imagePath}`;
  }

};
