import React from "react";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: "Naitik Chitransh",
    bio: "Frontend Developer | Clean UI Enthusiast ✨",
    coverImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1170",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    likes: "72.9K",
    posts: "828",
    shares: "342.9K",
  },
  {
    name: "Isha Patel",
    bio: "Backend Developer | API Wizard 💻",
    coverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1170",
    profileImg: "https://randomuser.me/api/portraits/women/64.jpg",
    likes: "50.2K",
    posts: "650",
    shares: "240.4K",
  },
  {
    name: "Aarav Verma",
    bio: "UI Designer | Minimalism is my code 🎨",
    coverImg: "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=1170",
    profileImg: "https://randomuser.me/api/portraits/men/75.jpg",
    likes: "88.1K",
    posts: "1.1K",
    shares: "512.2K",
  },
];

const App = () => {
  return (
    <div className="p-6 bg-gray-100 flex flex-wrap justify-center">
      {
        profiles.map((profile,index)=>{
          <ProfileCard
            key={index}
            name={profile.name}
            bio={profile.bio}
            coverImg={profile.coverImg}
            profileImg={profile.profileImg}
            likes={profile.likes}
            posts={profile.posts}
            shares={profile.shares}
          />
        })
      }

    </div>
  );
};

export default App;
