import './App.css';
import initialFriends from './Friends.js';

export default function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          Your friend {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className='button'>{children}</button>;
}

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label>Friend name</label>
      <input type='text' />

      <label>Image URL</label>
      <input type='text' />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with NAME</h2>

      <label> 💳 Bill value </label>
      <input type='text' />

      <label> Your expenses </label>
      <input type='text' />

      <label> FRIEND's expenses </label>
      <input type='text' disabled />

      <label> Who is paying the bill? </label>
      <select>
        <option value="user">You</option>
        <option value="friend">FRIEND</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
