import Link from "next/link";

const Create = () => {
  return (
    <div className="flex flex-col">
      <form>
        <div>
          <label htmlFor="room_code">Room name</label>
          <input type="text" id="room_code" name="room_code" />
        </div>
        <div>
          <label htmlFor="username">Your name</label>
          <input type="text" id="username" name="username" />
        </div>
      </form>
    </div>
  );
};

export default Create;
