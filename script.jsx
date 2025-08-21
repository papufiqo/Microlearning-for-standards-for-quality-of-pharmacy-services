{/* Chat Section */}
<div className="flex-1 overflow-y-auto p-4 space-y-3">
  <div className="bg-white p-3 rounded-2xl shadow max-w-xs">
    Welcome to today’s lesson!
  </div>

  <div className="bg-green-100 p-3 rounded-2xl shadow max-w-xs">
    Pharmacovigilance ensures drug safety monitoring.
  </div>

  {/* Image bubble */}
  <div className="bg-white p-3 rounded-2xl shadow max-w-xs">
    <img src="https://via.placeholder.com/200x120" alt="Lesson infographic" className="rounded-lg" />
    <p className="text-sm text-gray-600 mt-2">Drug interaction chart</p>
  </div>

  {/* Video bubble */}
  <div className="bg-green-100 p-3 rounded-2xl shadow max-w-xs">
    <video controls className="rounded-lg w-full">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="text-sm text-gray-600 mt-2">Short explainer video</p>
  </div>

  <div className="bg-white p-3 rounded-2xl shadow max-w-xs">
    Quiz: What does ADR stand for?
  </div>
  <div className="bg-green-100 p-3 rounded-2xl shadow max-w-xs">
    ✔ Correct! Adverse Drug Reaction.
  </div>
</div>
