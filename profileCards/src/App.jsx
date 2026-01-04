import React from "react";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: "Naitik Chitransh",
    bio: "Frontend Developer | Clean UI Enthusiast ✨",
    coverImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1170",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    likes: "72.9K",
    posts: "828",
    shares: "342.9K",
  },
  {
    name: "Isha Patel",
    bio: "Backend Developer | API Wizard 💻",
    coverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170",
    profileImg: "https://randomuser.me/api/portraits/women/64.jpg",
    likes: "50.2K",
    posts: "650",
    shares: "240.4K",
  },
  {
    name: "Aarav Verma",
    bio: "UI Designer | Minimalism is my code 🎨",
    coverImg: "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1170",
    profileImg: "https://randomuser.me/api/portraits/men/75.jpg",
    likes: "88.1K",
    posts: "1.1K",
    shares: "512.2K",
  },
  {
    name: "Meera Singh",
    bio: "Fullstack Developer | Tech Storyteller 🧠",
    coverImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1170",
    profileImg: "https://randomuser.me/api/portraits/women/21.jpg",
    likes: "64.3K",
    posts: "720",
    shares: "285.7K",
  },

   {
    name: "Aditya Rao",
    bio: "Mobile App Developer | Flutter & React Native 📱",
    coverImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1170", // NEW working URL
    profileImg: "https://randomuser.me/api/portraits/men/58.jpg",
    likes: "53.9K",
    posts: "610",
    shares: "301.5K",
  },
{
  name: "Priya Joshi",
  bio: "Cloud Architect | AWS Specialist ☁️",
  coverImg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1170", // NEW working URL
  profileImg: "https://randomuser.me/api/portraits/women/82.jpg",
  likes: "77.4K",
  posts: "810",
  shares: "435.8K",
},


,
  {
    name: "Anika Sharma",
    bio: "Product Manager | User Advocate 📌",
    coverImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1170",
    profileImg: "https://randomuser.me/api/portraits/women/35.jpg",
    likes: "69.8K",
    posts: "755",
    shares: "398.2K",
  },
];


const App = () => {
  return (
    <div className="p-6 bg-gray-100 flex flex-wrap justify-center">
      {
      profiles.map((profile,index)=>{
            return (<ProfileCard
            key={index}
            name={profile.name}
            bio={profile.bio}
            coverImg={profile.coverImg}
            profileImg={profile.profileImg}
            likes={profile.likes}
            posts={profile.posts}
            shares={profile.shares}
          />)
        })
      }

    </div>
  );
};

export default App;
