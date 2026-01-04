import React from "react";

const App = () => {
  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden m-4">
      <div className="relative">
        <img
          className="object-cover rounded-lg h-full w-full"
          src="https://images.unsplash.com/photo-1710933192178-4b7af4d451e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <button className="absolute top-3 right-3 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-blue-100 hover:scale-110 transition">
          Follow +
        </button>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md" src='https://images.unsplash.com/photo-1741731854418-602cb8d3c497?q=80&w=632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
      </div>
      <div className="mt-12 text-center px-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Naitik Chitransh
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Frontend Developer who loves clean UI ✨
        </p>

      </div>
      <div className="px-8 pt-5 pb-2 mt-1 flex gap-15">
          <div>
            <h3 className="text-lg font-semibold">45.6k</h3>
            <h3>Likes</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold">4.6k</h3>
            <h3>Posts</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold">33.6k</h3>
            <h3>Share</h3>
          </div>
      </div>
    </div>
  );
};

export default App;
