import GoogleCalendar from "@/components/Home/GoogleCalendar"

function Calender() {
  return (
    <div className="p-10">
      <div>
        <p className="text-xl font-inter font-semibold capitalize">calender</p>
      </div>
      <div>
        <GoogleCalendar />
      </div>
    </div>
  )
}

export default Calender
