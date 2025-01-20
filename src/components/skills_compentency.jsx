const SkillBar = ({ skill}) => { {/*percentage */}
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
          {/* <span className="text-gray-400">{percentage}%</span>  */}

      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${skill}` }}
        ></div>
      </div>
    </div>
  );
};

export  default  SkillBar