const ShabatTruma = () => {
    const options = [
        { label: "סעודה אחת", price: 150 },
        { label: "שתי סעודות", price: 300 },
        { label: "שלוש סעודות", price: 450 },
      ];
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100 flex items-center justify-center px-4 py-10">
          <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-yellow-300 p-8 text-right">
            <h1 className="text-3xl font-bold text-yellow-800 mb-6">
              תרומה לשבת בישיבה
            </h1>
            <p className="text-brown-700 mb-4">
              בחרו את מספר הסעודות שתרצו לתרום עבורן. כל סעודה – 150 ש״ח.
              התרומה שלכם תעניק חוויית שבת חמה ומכובדת לבני הישיבה.
            </p>
    
            <div className="space-y-4 mb-6">
              {options.map((opt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-yellow-50 hover:bg-yellow-100 transition rounded-xl px-6 py-4 border border-yellow-300 cursor-pointer"
                >
                  <span className="text-lg text-brown-800 font-semibold">
                    {opt.label}
                  </span>
                  <span className="text-lg text-yellow-700 font-bold">
                    ₪{opt.price}
                  </span>
                </div>
              ))}
            </div>
    
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition">
              לתרומה עכשיו
            </button>
          </div>
        </div>
      );
}
export default ShabatTruma;