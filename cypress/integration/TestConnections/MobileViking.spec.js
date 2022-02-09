describe('intercepting mobileVikings', () => {
    beforeEach(() => {
        cy.visit('https://mobilevikings.be/nl/')
        cy.get('#btn-accept-cookies').click()
    })

    it('intercepting klantendienst', () => {

        cy.intercept('b2c', {
            body: [
                { "name": "chat", "sla_duration": 2, "is_open": true, "opening_hours": [{ "days": "week", "opening_at": "08:30:00", "closing_at": "16:30:00" }] },
                { "name": "whatsapp", "uri": "https://wa.me/32456130693", "sla_duration": 20, "is_open": true, "opening_hours": [{ "days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00" }, { "days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00" }] },
                { "name": "call", "uri": "tel:+32456191976", "is_open": true, "opening_hours": [{ "days": "week", "opening_at": "08:30:00", "closing_at": "17:00:00" }] },
                { "name": "messenger", "uri": "https://m.me/mobilevikings", "sla_duration": 20, "is_open": true, "opening_hours": [{ "days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00" }, { "days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00" }] },
                { "name": "twitter", "uri": "https://twitter.com/analogHuns", "sla_duration": 20, "is_open": true, "opening_hours": [{ "days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00" }, { "days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00" }] },
                { "name": "mail", "uri": "mailto:info@mobilevikings.be", "sla_duration": 1440, "is_open": true, "opening_hours": [{ "days": "all", "opening_at": "00:00:00", "closing_at": "23:59:00" }] }
            ]
        }).as('klantendienst')

        cy.visit('https://mobilevikings.be/nl/offer/subscriptions/')
        cy.wait('@klantendienst')

        //accept cookies
        //naar abbonementen
        //intercept'https://fakta.mobilevikings.be/support-channels/b2c
    })

    it('intercepting reviews', () => {
        cy.intercept('reviews**', {
            body: {
                "number_of_reviews": 17974,
                "average_score": 8.38,
                "buckets": { "0": 445, "1": 449, "2": 533, "3": 854, "4": 4172, "5": 11521 },
                "reviews": [
                    { "name": "Sander", "score": 10, "text": "Decent service", "date": "2021-11-11T00:00:00Z" },
                    { "name": "NietSander", "score": 1, "text": "Bad service", "date": "2020-11-17T00:00:00Z" },
                ]
            }

        }).as('reviews')

        cy.visit('https://mobilevikings.be/nl/offer/subscriptions/')
        cy.wait('@reviews')

    })

})