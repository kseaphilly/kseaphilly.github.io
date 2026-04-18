# Migration Scripts Documentation

This directory contains the Python scripts developed for the KSEA Philadelphia v2 website migration (April 2026).

## Scripts Overview

| Script | Description |
| :--- | :--- |
| `fix_logos.py` | Global replacement of placeholder logo names (e.g., `ksea-philly-seal.png`) with actual asset names (`ksea_phily_logo.png`). |
| `design_upgrade.py` | Bulk layout injection for secondary pages (`about`, `events`, `leadership`, `sponsors`) to match the v2 design system. |
| `restore_events.py` | Restores the `events.html` page structure while upgrading to the new 3-grid calendar layout. |
| `fix_rest_grids.py` | Enforces strict image constraints (`120px` circle, `object-fit: cover`) and 1px border grid layouts for leadership and sponsor sections. |
| `fix_mem_instruct.py` | Specifically restyles the membership instruction steps with shadow-boxed images and large numerical indicators. |
| `fix_images.py` / `fix_images_2.py` | Normalizes relative paths for images across subdirectories (upgrading `assets/` to `../assets/`). |
| `v2_migrate.py` | Initial staging script for moving content into the `v2/` directory. |
| `extract_data.py` | Utility used to parse legacy HTML content for migration. |

## Usage
These scripts utilize Python's `re` module for idempotent regex replacements. They are designed to be run from the repository root.

```bash
python3 scripts/migration/restore_events.py
```
