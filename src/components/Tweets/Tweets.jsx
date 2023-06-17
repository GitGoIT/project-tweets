import css from "./Tweets.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { updateValueByKey } from "../../services/service-func";
import picture from "../../images/bg/card-bg.png";
import logo from "../../images/logo/logo.png";
import defaultAvatar from "../../images/avatar/avatar-default.png";
import { FiChevronsLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Tweets = () => {
  const [isFollowing, setIsFollowing] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [hasMore, setHasMore] = useState(true);

  if (!localStorage.getItem("myTweets")) {
    localStorage.setItem("myTweets", JSON.stringify([]));
  }

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const fetchGetAllUsers = async () => {
    const { data } = await instance.get(`/users?page=${page}&limit=${limit}`);
    setUsers([...users, ...data]);
    setPage((prevPage) => prevPage + 1);
    if (data.length < limit) {
      setHasMore(false);
    }
    return data;
  };

  useEffect(() => {
    const storageState = JSON.parse(localStorage.getItem("myTweets"));
    setIsFollowing(storageState);
    fetchGetAllUsers();
  }, []);

  const handleSubmit = (props) => {
    const userId = props.target.id;
    const storedTweets = JSON.parse(localStorage.getItem("myTweets"));
    const followState = storedTweets.find(
      (e) => e.id === userId && e.isFollow === true
    );

    if (!storedTweets.find((e) => e.id === userId)) {
      updateValueByKey(storedTweets, "id", userId, true);
    }
    if (followState) {
      updateValueByKey(storedTweets, "id", userId, false);
    }
    if (!followState) {
      updateValueByKey(storedTweets, "id", userId, true);
    }

    const obj = storedTweets;
    setIsFollowing(obj);
    localStorage.setItem("myTweets", JSON.stringify(obj));
  };

  const handleLoadMore = () => {
    fetchGetAllUsers();
  };

  const elements = users.map((item) => (
    <li key={item.id} className={css.item}>
      <div className={css.imageBlock}>
        <img className={css.logo} src={logo} alt="logo" />
        <img className={css.picture} src={picture} alt="card-background" />
        <div className={css.avatarBlock}>
          <img
            className={css.avatar}
            src={item.avatar ? item.avatar : defaultAvatar}
            alt="avatar"
          />
        </div>
        <div className={css.line}></div>
      </div>
      <div className={css.textBlock}>
        <p className={css.tweets}>
          {item.tweets.toLocaleString("en-US")} TWEETS
        </p>
        <p className={css.followers}>
          <span className={css.followersCount}>
            {isFollowing.find((e) => e.id === item.id && e.isFollow === true)
              ? (item.followers + 1).toLocaleString("en-US")
              : item.followers.toLocaleString("en-US")}
          </span>
          FOLLOWERS
        </p>
        <button
          type="submit"
          onClick={handleSubmit}
          id={item.id}
          className={
            isFollowing.find((e) => e.id === item.id && e.isFollow === true)
              ? `${css.btn} ${css.btnActive}`
              : css.btn
          }
        >
          {isFollowing.find((e) => e.id === item.id && e.isFollow === true)
            ? "FOLLOWING"
            : "FOLLOW"}
        </button>
      </div>
    </li>
  ));

  return (
    <div className={css.container}>
      <NavLink className={css.navBtn} to="/">
        <FiChevronsLeft className={css.navIcon} />
        <p className={css.navTitle}>Go back</p>
      </NavLink>
      <ul className={css.list}>{elements}</ul>
      {hasMore && (
        <button
          onClick={handleLoadMore}
          className={`${css.btn} ${css.btnLoadMore}`}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Tweets;
