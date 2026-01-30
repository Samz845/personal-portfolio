import DesktopContact from "./DesktopContact";
import MobileContact from "./MobileContact";
function Contact() {
  return (
    <div
      className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4"
      id="contact"
    >
      <DesktopContact />
      <MobileContact />
    </div>
  );
}

export default Contact;
