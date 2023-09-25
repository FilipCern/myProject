import React from "react";

function ProfilePic({ imageUrl, altText }) {
    return (
        <div className="user-prfile-picture">
            <img src={imageUrl} alt={altText} />
        </div>
    )
}
export default ProfilePic;