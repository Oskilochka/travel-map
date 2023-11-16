package com.map.entities;

import java.util.Arrays;
import java.util.List;

public enum MarkerType {
    PLACE(0), EVENT(1), SHOP(2), PARK(3), TRANSPORT(4), MEDICAL(5), LANDMARK(6), OUTDOOR_ACTIVITY(7);

    private final int id;

    MarkerType(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public List<MarkerType> getSingle() {
        return Arrays.asList(this);
    }

    public static List<MarkerType> getAllValues() {
        return Arrays.asList(PLACE, EVENT, SHOP, PARK, TRANSPORT, MEDICAL, LANDMARK, OUTDOOR_ACTIVITY);
    }
}
