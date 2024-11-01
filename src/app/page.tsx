

export default function Home() {
  return (
    <div>
      <nav className="flex gap-14  w-full bg-blue-700 h-14 text-white">
      <div className="bg-purple-700 h-14 p-3"><h1>Logo</h1></div>

      <div><p className="font-bold  p-4">Tuition Free Education Program on Latest Technologies</p></div>
      <div>
        <ul className="flex p-4 gap-16 justify-end">
          <li><a href="">Home</a>
          </li>
          <li><a href="">Apply</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Results</a></li>
          <li><a href="">Courses</a></li>
        </ul>
      </div>
      </nav>
      <div className="w-full h-14 bg-black text-white p-4"><center>
      Description</center> </div>
    <div className="flex w-full justify-between gap-2 p-4">
      <div className="bg-green-600 w-1/3 h-96">no1</div>
      <div className="bg-purple-600 w-1/3 h-96">no2</div>
      <div className="bg-green-700 w-1/3 h-96">no3</div>
      </div>  
      <div className="flex justify-between gap-2 p-4 w-full ">
        <div className="bg-orange-500 h-96 w-1/2"></div>
        <div className="bg-blue-800 h-96 w-1/2"></div>
      </div>
    </div>

  );
}
