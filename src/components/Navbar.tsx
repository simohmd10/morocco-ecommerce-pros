<AnimatePresence>
  {mobileOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 bg-black z-40"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className="fixed top-0 end-0 h-full w-64 bg-background border-s border-border z-50 shadow-xl"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          {links.map(link => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>