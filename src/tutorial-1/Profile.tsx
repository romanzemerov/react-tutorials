import { ProfileProps } from './types';
import { dateFormatter } from './App';
import s from './Profile.module.css';

export const Profile = ({ name, registeredAt }: ProfileProps) => (
  <div className={s.root}>
    <div className={s.inner}>
      <div className={s.header}>
        Привет, <b>{name}!</b>
      </div>
      <div>Дата регистрации: {dateFormatter.format(registeredAt)}</div>
    </div>
  </div>
);

// Class component syntax
// export class Profile extends Component<ProfileProps> {
//   render() {
//     const {name, registeredAt} = this.props;
//
//     return (
//       <div className={s.root}>
//         <div className={s.inner}>
//           <div className={s.header}>
//             Привет, <b>{name}!</b>
//           </div>
//           <div>Дата регистрации: {dateFormatter.format(registeredAt)}</div>
//         </div>
//       </div>
//     );
//   }
// }
