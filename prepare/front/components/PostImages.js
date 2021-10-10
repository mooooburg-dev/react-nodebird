import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  if (images.length === 1) {
    return <img src={images[0].src} alt={images[0].src} onClick={onZoom} />;
  } else if (images.length === 2) {
    return (
      <>
        <img
          src={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          src={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          alt={images[0].src}
          onClick={onZoom}
        />
      </>
    );
  } else {
    return (
      <>
        <div>
          <img
            src={images[0].src}
            width="50%"
            alt={images[0].src}
            onClick={onZoom}
          />
          <div
            role="presentation"
            style={{
              display: "inline-block",
              width: "50%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            onClick={onZoom}
          >
            <PlusOutlined />
            <br />
            {images.length - 1}개의 사진 더보기
          </div>
        </div>
      </>
    );
  }
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
