const ProfileForm = () => {
  return (
    <form>
      <div>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;