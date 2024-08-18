import React from "react";

function Nav() {
  return (
    <div className="flex justify-between w-full px-10 py-5">
      <h2>Calender</h2>
      <div id="userDiv" className="flex gap-4">
        <img
          src="https://neural.love/cdn/thumbnails/1eeadda2-26bd-6790-a3d4-d7e38f372fcd/8cd52b05-2159-53b2-861b-6cd39342b823.webp?Expires=1727740799&Signature=2~fZtqFCWfQcmzmGKwlMLXu9DQMzCbLCqJayRp6kM6uFQdl2KwtDnzBFWduyDtLksjIQ7D~WcCKGVEKB5n4NVFrqGXT5WSZQ3y8G0toSZ5xXXr6qjNFD5fGS9k9VklvuvS7pA6nPo6Y9-9sm-aD8L7XS0EGt5lO11ittjj7TDtKdbk3FaB5DV2yHvvrVP1MvAu9qptVj3TyzNzXuTZnDbG-7FZJWPfEbQ7~nS~0lwXQB~zbQlVQEwi4yOVCAlM2XCMVcwYRxmT1Ia1pFvtVlaH72ZNgYXsLBbHbzOLGeF88PHYVNWOCZPoEQjLQriUk4m09xl3d8UXjaXayyXDzKkA__&Key-Pair-Id=K2RFTOXRBNSROX"
          className="rounded-md h-10 w-10"
        />
        <div>
          <h3 className="text-sm font-semibold">Kaze Yami</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
