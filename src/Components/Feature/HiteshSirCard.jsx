function HiteshSirCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Header with curved image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-90"></div>
        <div className="h-32 bg-orange-500 rounded-b-[40px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"></rect>
            </svg>
          </div>
        </div>
        
        {/* Profile image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
              <img
                src="/images/hiteshSir.webp"
                alt="Hitesh Sir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-20 px-6 pb-6">
        {/* Name and title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Hitesh Choudhary</h2>
          <p className="text-orange-500 font-medium">Founder & Lead Instructor</p>
          
          <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
            retired from corporate and full time YouTuber, ex-founder of LCO
            (accquired), ex-CTO, Sr. Director at PW. 2 YT channels (950k &
            470k), stepped into 43 countrires.
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex justify-between gap-2 mb-6">
          <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 p-3 rounded-xl text-center shadow-sm">
            <div className="text-orange-500 font-bold text-xl">1.5M+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Subscribers</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 p-3 rounded-xl text-center shadow-sm">
            <div className="text-orange-500 font-bold text-xl">10K+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 p-3 rounded-xl text-center shadow-sm">
            <div className="text-orange-500 font-bold text-xl">500+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Videos</div>
          </div>
        </div>
        
        {/* Approach */}
        <div className="mb-6">
          <div className="text-gray-900 dark:text-white font-semibold text-lg mb-2 flex items-center">
            <span className="inline-block w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
            Approach
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm pl-6">
            Project based courses with peer learning and bounties with many activities
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-2 rounded-lg text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-2 rounded-lg text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-2 rounded-lg text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a href="#" className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-2 rounded-lg text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HiteshSirCard