import { ProfileProps } from './types';
import { dateFormatter } from './App';
import s from './Profile.module.css';

export const Profile = ({ name, registeredAt }: ProfileProps) => {
  const [firstName] = name.split(' ');
  const [formatRegisterDate] = dateFormatter.format(registeredAt).split('г.');

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <div className={s.header}>
          Привет, <b>{firstName}!</b>
        </div>
        <div>Дата регистрации: {formatRegisterDate}</div>
      </div>
    </div>
  );
};

// Class component syntax
// export class Profile extends Component<ProfileProps> {
//   render() {
//     let {name, registeredAt} = this.props;
//     const [firstName] = name.split(' ');
//     const [formatRegisterDate] = dateFormatter.format(registeredAt).split('г.');
//
//     return (
//       <div className={s.root}>
//         <div className={s.inner}>
//           <div className={s.header}>
//             Привет, <b>{firstName}!</b>
//           </div>
//           <div>Дата регистрации: {formatRegisterDate}</div>
//         </div>
//       </div>
//     );
//   }
// }
