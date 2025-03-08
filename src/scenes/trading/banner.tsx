export function MarketingBanners() {
    const banners = [
        {
            id: 1,
            title: 'Polar Vortex Markets',
            description: 'Trade winter storm affected markets',
            image: 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&w=800&q=80',
            cta: 'View Markets',
            theme: 'blue',
        },
        {
            id: 2,
            title: 'LA STRONG Campaign',
            description: 'Support LA recovery efforts',
            image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80',
            cta: 'DAO Vote',
            theme: 'purple',
        },
        {
            id: 3,
            title: 'Solana Trading',
            description: 'Fast & efficient real estate trading',
            image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80',
            cta: 'View Market',
            theme: 'gradient',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {banners.map((banner) => (
                    <div
                        key={banner.id}
                        className="relative overflow-hidden rounded-lg h-48 group"
                    >
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{banner.title}</h3>
                                <p className="text-sm text-gray-200 mt-1">{banner.description}</p>
                            </div>
                            <button className="self-start px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                                {banner.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}