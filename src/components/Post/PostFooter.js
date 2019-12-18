import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import asyncComponent from "../common/AsyncComponent/";
import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  },
  bmc: {
    padding: "7px 10px 7px 10px",
    lineHeight: "35px",
    height: "51px",
    minWidth: "217px",
    textDecoration: "none !important",
    display: "inline-flex",
    backgroundColor: "#FFDD00",
    borderRadius: "5px",
    border: "1px solid transparent",
    "& img": {
      width: "35px",
      marginBottom: "1px",
      boxShadow: "none",
      border: "none",
      verticalAlign: "middle"
    }
  }
});
const PostShare = asyncComponent(() =>
  import("./PostShare")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const PostFooter = ({ classes, author, post, slug, facebook }) => {
  return (
    <footer className={classes.footer}>
      <div style={{ textAlign: "center" }}>
        <a className={classes.bmc} target="_blank" href="https://www.buymeacoffee.com/lp1cMOE"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"/><span style={{ marginLeft: '15px', fontSize: '28px' }}>Ủng hộ tớ ly cafe nhé!</span></a>
      </div>
      <PostShare post={post} slug={slug} />
      <PostAuthor author={author} />
      <PostComments post={post} slug={slug} facebook={facebook} />
    </footer>
  );
};

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostFooter);
