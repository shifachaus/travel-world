const CopyrightFooter = () => {
  return (
    <footer className="absolute bottom-10">
      <p className="text-xs text-neutral-300 font">
        Travel world &copy; Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default CopyrightFooter;
