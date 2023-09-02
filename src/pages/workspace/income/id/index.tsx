function WorkspaceIncomeDetail() {
    return (
        <main>
            {/* date details identifier */}
            <h1 className="text-lg mb-8">Data Pendapatan tanggal : <span className="text-xl block font-semibold">23 Januari 2023</span></h1>

            <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
                    <h2 className="font-semibold text-lg">Pendapatan Sparepart</h2>
                    <div>
                        <h3>Total</h3>
                        <p className="font-semibold">Rp250.000</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Keterangan</h3>
                        <p>Servis ringan : <span className="font-semibold">10</span></p>
                        <p>Servis berat : <span className="font-semibold">4</span></p>
                        <p>Ganti oli : <span className="font-semibold">8</span></p>
                        <p>Lain-lain : <span className="font-semibold">Ganti aki: 2, ganti mesin: 1</span></p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
                    <h2 className="font-semibold text-lg">Pendapatan Jasa</h2>
                    <div>
                        <h3>Total</h3>
                        <p className="font-semibold">Rp750.000</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Keterangan</h3>
                        <p>Sparepart Mesin : <span className="font-semibold">10</span></p>
                        <p>Sparepart Kelengkapan Motor : <span className="font-semibold">4</span></p>
                        <p>Oli : <span className="font-semibold">8</span></p>
                        <p>Lain-lain : -</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WorkspaceIncomeDetail;