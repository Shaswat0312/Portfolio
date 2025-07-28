const Sidebar = () => {
  return (
    <>
      <aside className="hidden sm:flex fixed left-0 ml-6 top-1/2 -translate-y-1/2 h-[560px] w-20 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 
        shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex-col items-center justify-between py-8 z-[100]">
       
        <div className="text-white text-2xl font-bold h-10 w-10 mb-7 -mt-5"><img src="./Logo.jpg" alt="" /></div>

        <div className="flex flex-col gap-6 text-white text-xl items-center">
          <SidebarIcons />
        </div>

        <div className="text-white text-sm mt-8">© SMISHO</div>
      </aside>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20 
      flex justify-around items-center py-3 px-4 z-[100] shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
        <SidebarIcons isMobile />
      </div>
    </>
  );
}

function SidebarIcons({ isMobile }) {
  const iconStyle = isMobile ? "w-8 h-8" : "w-11 h-11";

  return (
    <>
      <a href="https://github.com/Shaswat0312" target="_blank" rel="noreferrer" title="GitHub">
        <img src="/Github.png" alt="GitHub" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
      <a href="https://www.linkedin.com/in/shaswatmishra3" target="_blank" rel="noreferrer" title="LinkedIn">
        <img src="/linkdin.png" alt="LinkedIn" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
      <a href="https://drive.google.com/file/d/1Ysp6atXxabgQBiIUj-wQM1etbANpc-vL/view?usp=sharing" target="_blank" rel="noreferrer" title="Resume">
        <img src="/resume.png" alt="Resume" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
      <a href="mailto:shaswat@example.com" target="_blank" rel="noreferrer" title="Email">
        <img src="/gmail.png" alt="Email" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
      <a href="https://x.com/Shaswat031204" target="_blank" rel="noreferrer" title="X">
        <img src="/X.png" alt="X" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
      <a href="https://www.instagram.com/smisho_03/" target="_blank" rel="noreferrer" title="Instagram">
        <img src="/instagram.png" alt="Instagram" className={`${iconStyle} hover:scale-110 transition-transform`} />
      </a>
    </>
  );
}

export default Sidebar