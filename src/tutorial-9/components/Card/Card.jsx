export function Card(props) {
  const {
    name,
    login,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
  } = props;

  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={avatar_url} alt="Аватар юзера" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {name}
            <span>{login}</span>
          </h1>
          <p className="app-user_about">{bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписан
          <span>{following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{location}</li>
        <li className="app-user_location-item">
          <a href={blog}>{blog}</a>
        </li>
      </ul>
    </div>
  );
}
